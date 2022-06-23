import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.jsx";

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;
  console.log(category.imageUrl);
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
