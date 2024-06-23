import React from "react";

interface Props {
  params: { id: number };
}

// const UserDetails = (props: Props) => {
    //   console.log(props);  // { params: { id: '1' }, searchParams: {} }

  const UserDetails = ({ params: { id } }: Props) => {

  return <div>UserDetails {id}</div>;
};

export default UserDetails;
