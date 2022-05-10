import { Cell, Title, Row, Container } from './discountStyle';
import ReactPaginate from 'react-paginate';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function OneRow(props){
    const {NAME, DISCRIPTION, TIMEON, STATUS} = props.info;

    return(
      <>
      <Row>
        <Cell>{NAME}</Cell>
        <Cell>{DISCRIPTION}</Cell>
        <Cell>{STATUS}</Cell>    
      </Row>
      </>
    );
  }
  
  function TitleRow(){
    return (
      <Row>
        <Title>Tên</Title>
        <Title>Mô tả</Title>
        <Title>Thời gian bật</Title>
        <Title>Valid date</Title>
        <Title>Expire date</Title>
        <Title>Shop ID</Title>
        <Title>Shop Dis Type</Title>
      </Row>
    );
  }

function Items({ currentItems }) {
  return (
    <div className="items" style={{width: '1000px'}}>
    {currentItems && currentItems.map((item) => (
      <div>
        <OneRow info={item}/>
      </div>
    ))}
      </div>
  );
}


function ShopDiscount({ DiscountList, itemsPerPage }) {

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => { 
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(DiscountList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(DiscountList.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % DiscountList.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Container> 
      <TitleRow />
      <Items currentItems={currentItems}/>
      
      <div className='container' style={{display:'flex', justifyContent:'right', position:'absolute', bottom: '0px'}}>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
      </div>
      </Container>
    </>
  );
}
  
  
  export default ShopDiscount;