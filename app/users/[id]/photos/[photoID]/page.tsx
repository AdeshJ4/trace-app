import React from "react";

interface Props {
  params: { id: number; photoID: number };
  searchParams: {};
}

const photoPage = ({ params: { id, photoID } }: Props) => {
  return (
    <>
      <h1>Photo Page</h1>
      <h3>ID: {id}</h3>
      <h3>photoID: {photoID}</h3>
    </>
  );
};

export default photoPage;
