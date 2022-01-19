import { graphql, useStaticQuery } from 'gatsby';
import * as React from "react";
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      iconImage: file(relativePath: {eq: "icon.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 100
            width: 100
          )
        }
      }
    }
  `);

  return (
    <>
      <div className="container-xl text-center">
        <div className="row">
          <div className="col-full">
            <h1 className="typo-h1">
              Hello Gatsby
            </h1>
            <Image
              image={getImage(data.iconImage)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
