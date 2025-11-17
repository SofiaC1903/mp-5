import { LinkProps } from "@/LinkProps";
import Link from "next/link";
import styled from "styled-components";

const StyledDiv = styled.div`
    font-family: "Titan One", sans-serif;
    font-size: calc(2px + 2vw);
    justify-content: center;
    color: var(--color-alabastergrey);
    text-shadow: 1px 2px 8px #78678E;
    padding-bottom: 5%;
`

export default function LinkPreview({ link }: {link: LinkProps}){
    return (
        <StyledDiv>
            <h4>Final URL:</h4>
            <Link href={link.longurl}>
                {link.shorturl}
            </Link>
        </StyledDiv>
    )
}