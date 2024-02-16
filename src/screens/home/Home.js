import {Directory} from "../../components/directory/Directory"

export const Home = () => {
  const categories = [
    {
      title: "Hats",
      id: 1,
      imageUrl: `https://i.ibb.co/0jqHpnp/sneakers.png`,
    },
    {
      title: "jackets",
      id: 2,
      imageUrl: `https://i.ibb.co/0jqHpnp/sneakers.png`,
    },
    {
      title: "Sneakers",
      id: 3,
      imageUrl: `https://i.ibb.co/0jqHpnp/sneakers.png`,
    },
    {
      title: "Womens",
      id: 4,
      imageUrl: `https://i.ibb.co/0jqHpnp/sneakers.png`,
    },
    {
      title: "Mens",
      id: 5,
      imageUrl: `https://i.ibb.co/0jqHpnp/sneakers.png`,
    },
  ];

  return (
    <>
    <Directory categories={categories}/>
    </>
  );
}
