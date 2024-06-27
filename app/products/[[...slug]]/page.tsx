import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string, pageNumber: number };
}
// url : http://localhost:3000/products/123/photos/dog?sortOrder=price&pageNumber=1
const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder, pageNumber },
}: Props) => {
  return (
    <>
      <div>ProductPage {slug.join(", ")}</div>  {/* 123, photos, dog  */}
      <div>Search Params: </div> 
      <h2>sortOrder : {sortOrder }</h2>{/* price  */}
      <h2>page Number: {pageNumber}</h2>{/* pageNumber  */}
    </>
  );
};

export default ProductPage;
