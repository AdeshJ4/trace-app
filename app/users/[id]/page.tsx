import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}

// const UserDetails = (props: Props) => {
    //   console.log(props);  // { params: { id: '1' }, searchParams: {} }

  const UserDetails = ({ params: { id } }: Props) => {
    if(id>1000) notFound(); 
  return <div>UserDetails {id}</div>;
};

export default UserDetails;
