import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/Ui/CommonSection";
import products from "../assets/fake-data/products";
import ProductCard from "../Components/ProductCard/ProductCard";
import ReactPaginate from "react-paginate";
import "../Styles/pagination.css";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const searchProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (
      item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    ) {
      return item;
    } else {
      return console.log("Not found");
    }
  });

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="All-Fruits">
      <CommonSection title="All Foods" />
      <section>
        <Container>
          <Row>
            {/* -------Column Right side--------- */}
            <Col lg="6" md="6">
              <div className="search__widget">
                <input
                  className="form-control mt-2"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  value={searchTerm}
                  type="text"
                  placeholder="I am looking for..."
                />
                {/* <span>
                  <i className="ri-search-line"></i>
                </span> */}
              </div>
            </Col>

            {/* ---------Column Left side------------- */}
            <Col lg="6" md="6">
              <div className="sorting__widget">
                <select className="form-control mt-2">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A to Z</option>
                  <option value="descending">Alphabetically Z to A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {/* Checking length and mapping product by condition */}
            {displayPage.length === 0 ? (
              <h6 className="text-center my-4">No Product Found!!!</h6>
            ) : (
              displayPage.map((item, index) => (
                <Col lg="3" md="4" key={index}>
                  <ProductCard item={item} />
                </Col>
              ))
            )}

            <div>
              {/* React-pagination */}
              <ReactPaginate
                pageCount={pageCount}
                nextLabel={"Next"}
                previousLabel={"Prev"}
                onPageChange={changePage}
                containerClassName="paginationBtns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
