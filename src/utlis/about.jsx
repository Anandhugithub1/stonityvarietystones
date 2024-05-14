

import { HeroParallax } from "../ui/aboutparallax";
export function HeroParallaxDemo() {
  return (
    <div  className="bg-green-50">
    <HeroParallax products={products}/>

    </div>
  )
}


// eslint-disable-next-line react-refresh/only-export-components
export const products = [
  {
    title: "Moonbeam",
    link: "",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/democlis.appspot.com/o/photo_2024-05-12_15-58-48.jpg?alt=media&token=6ccf1367-ebd8-4f81-8dc1-e398a91a8288",
  },
  {
    title: "",
    link: "",
    thumbnail:
      "https://picjj.com/images/2024/05/12/hBzMo.jpg",
  },
  {
    title: "Rogue",
    link: "",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/democlis.appspot.com/o/photo_2024-05-12_15-58-48.jpg?alt=media&token=6ccf1367-ebd8-4f81-8dc1-e398a91a8288",
  },

  {
    title: "Editorially",
    link: "",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/democlis.appspot.com/o/photo_2024-05-12_15-58-45.jpg?alt=media&token=b6dc241e-4919-4ff2-a0b6-91f4866ff8c9",
  },
  {
    title: "Editrix ",
    link: "",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/democlis.appspot.com/o/photo_2024-05-12_16-04-58.jpg?alt=media&token=37925417-baa1-45ad-a4c1-38b80cd77d10",
  },
  {
    title: "Pixel Perfect",
    link: "",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/democlis.appspot.com/o/images%2Fphoto_2024-05-12_16-10-20.jpg?alt=media&token=cf89ccda-c8a2-4c9d-972b-3f380f3c4879",
  },

  {
    title: "Algochurn",
    link: "",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/democlis.appspot.com/o/images%2Fphoto_2024-05-12_16-10-20.jpg?alt=media&token=cf89ccda-c8a2-4c9d-972b-3f380f3c4879",
  },
  {
    title: "Aceternity UI",
    link: "",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/democlis.appspot.com/o/images%2Fphoto_2024-05-12_16-10-13.jpg?alt=media&token=0635c771-bbaa-400d-b2b9-f610f3bb5164",
  },
  
];

