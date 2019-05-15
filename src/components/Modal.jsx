import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Button from "./Button"

const Modal = (props) => {

  const { onCloseModal } = props
  const { img, title, price } = props.product

  const handleContinueShopping = (e) => {
    onCloseModal()
  }

  return (
    <ModalWrapper>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mx-auto">

            <div className="modal-card card mx-auto">
              <main className="card-body">
                <div className="header-text">Item added to the Cart</div>
                <div className="img-wrapper">
                  <img src={ img } alt="img-001"/>
                </div>
                <div className="title">{ title }</div>
                <div className="price">{ "Price: $ " + price }</div>
              </main>

              <footer className="card-footer">
                <Link to="/" onClick={ handleContinueShopping }>
                  <Button>Continue Shopping</Button>
                </Link>
                <Link to="/cart">
                  <Button mainColor="var(--mainYellow)">Go to the Cart</Button>
                </Link>
              </footer>
            </div>

          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`

  border: 1px dashed red; /* Test Guide */

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-card {
    width: 450px;
    background-color: var(--mainWhite);

    main.card-body {

      .header-text {
        text-align: center;
        font-size: 1.4rem;
        padding: 0.5em;
        font-weight: 500;
      }

      .img-wrapper {
        text-align: center;

        img {
          height: 280px;
        }
      }

      .title {
        font-size: 1.2rem;
        text-align: center;
        padding: 0.3em 0;
        font-weight: 500;
      }

      .price {
        text-align: center;
        color: var(--lighterDark2);
        font-weight: 600;
      }
    }

    footer.card-footer {
      background: var(--lighterDark5);
      display: flex;
      justify-content: space-between;
    }
  }
`

export default Modal

