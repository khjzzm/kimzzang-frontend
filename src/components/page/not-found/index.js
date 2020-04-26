import * as React from 'react';
import {Link} from "react-router-dom";
import {IoMdArrowRoundBack} from 'react-icons/io';
import {
    NotFoundWrapper,
    NotFoundContent,
    NotFoundImage,
    Goback,
    Icon,
} from './style';

const NotFound = () => {

    return (
        <NotFoundWrapper>
            <NotFoundContent>
                <h1>This Page Was Lost</h1>
                <p>
                    The Page You are looking for isn’t available. Try to search again or
                    use the Go Back button below.
                </p>
                <Goback>
                    <Link to="/">
                        <Icon>
                            <IoMdArrowRoundBack/>
                        </Icon>
                        Go Back
                    </Link>
                </Goback>
            </NotFoundContent>
            <NotFoundImage>
                {/*<Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />*/}
            </NotFoundImage>
        </NotFoundWrapper>
    );
};

export default NotFound;
