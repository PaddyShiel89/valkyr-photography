declare module "*.module.scss";

declare type ValkyrPhoto = {
  altText: Queries.SanityImageAsset["altText"];
  gatsbyImage: Queries.SanityImageAsset["gatsbyImage"];
};

declare type ValkyrPhotoset = (ValkyrPhoto & {
  id: string;
})[];
