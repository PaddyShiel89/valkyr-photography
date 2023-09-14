import {SlugifierFn} from 'sanity'
import {getMonthFromSanityDate, getYearFromSanityDate} from '../../src/helpers'

export const slugifyPhotoset: SlugifierFn = async (input, type, content) => {
  const {getClient} = content
  const client = getClient({apiVersion: '2021-08-31'})

  /* -------------------------------- Get date -------------------------------- */

  // @ts-ignore
  const month = getMonthFromSanityDate(content.parent.date)
  // @ts-ignore
  const year = getYearFromSanityDate(content.parent.date)
  const date = [month, year]

  /* ----------------------------- Get model names ---------------------------- */

  // Create an object which will contain each model ref as a key and the
  // number of appearances in the set as a value.
  const modelAppearance: {[name: string]: number} = {}

  // Loop through each photo
  // @ts-ignore
  content.parent.photos.forEach(
    (p: {models: {_ref: string}[]}) =>
      // Loop through each model in the photo, and return [_ref, 1] for a new
      // model instance, or update the existing model instance
      p?.models?.forEach((m) =>
        m?._ref && modelAppearance[m._ref]
          ? modelAppearance[m._ref]++
          : (modelAppearance[m?._ref as string] = 1),
      ),
  )
  // Convert the object into an array of [name, value] items, then sort them
  // from highest to lowest.
  const modelAppearanceArray = Object.keys(modelAppearance)
    .map((m) => [m, modelAppearance[m]])
    .sort((a, b) => (a[1] as number) - (b[1] as number))

  // Remove all items after the first three
  const reducedModelAppearanceArray =
    modelAppearanceArray.length >= 3 ? modelAppearanceArray : modelAppearanceArray.slice(0, 3)

  const modelNames: string[] = []

  await Promise.all(
    reducedModelAppearanceArray.map(async (_ref) => {
      // Search all `models` documents for an `_id` that matches the provided ref
      const query = `*[_type == "models" && _id == $id].name`
      const params = {id: _ref[0]}
      await client.fetch(query, params).then((res: string) => {
        modelNames.push(res)
      })
    }),
  )

  return [...modelNames, ...date, input]
    .join(' ')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(',', '')
    .slice(0, 200)
}
