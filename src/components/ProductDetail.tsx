import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail({ products }) {
  const { id } = useParams();
  return (
    <>
      <h1>Productos</h1>
    </>
  );
}
