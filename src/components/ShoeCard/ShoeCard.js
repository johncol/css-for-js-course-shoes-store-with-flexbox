import React from "react";
import styled, { keyframes } from "styled-components/macro";

import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../Spacer";
import { mediaQueries } from "../../mediaQueries";

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  const isOnSale = variant === "on-sale";
  const isNewRelease = variant === "new-release";
  const shouldDisplayTag = isOnSale || isNewRelease;

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price isOnSale={isOnSale}>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
          {isOnSale && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
        </Row>
        {shouldDisplayTag && (
          <ItemTag isOnSale={isOnSale} isNewRelease={isNewRelease}>
            {isOnSale ? "Sale" : "Just Released!"}
          </ItemTag>
        )}
      </Wrapper>
    </Link>
  );
};

const Brighten = keyframes`
  0% {
    filter: none;
  }
  50% {
    filter: sepia(0.2);
  }
  100% {
    filter: none;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  flex: 1 1 344px;
`;

const Wrapper = styled.article`
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 5px;
  
  @media ${mediaQueries.noMotionPreference} {
    transform-origin: center 80%;
    transition: transform 600ms;

    ${Link}:hover &,
    ${Link}:focus & {
      transition: transform 400ms;
      transform: scale(1.05);
      animation: ${Brighten} 400ms;
    }
  }
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-900);
`;

const Price = styled.span`
  text-decoration: ${(props) => (props.isOnSale ? "line-through" : "none")};
  color: var(
    ${(props) => (props.isOnSale ? '--color-gray-700' : '--color-gray-900')}
  );
`;

const ColorInfo = styled.p`
  color: var(--color-gray-700);
`;

const SalePrice = styled.span`
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
`;

const ItemTag = styled.div`
  position: absolute;
  right: -4px;
  top: 12px;
  font-size: 14px;
  line-height: 32px;
  padding: 0 10px;
  border-radius: 2px;

  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  background-color: var(
    ${(props) => {
      if (props.isOnSale) {
        return '--color-primary';
      }
      if (props.isNewRelease) {
        return '--color-secondary';
      }
      return '--color-gray-700';
    }}
  );
`;

export default ShoeCard;
