import { keyframes } from "styled-components"

const LimiteDeslocamento = -1*window.innerWidth*2 + "px";

const MovLeft_subBanner = keyframes`
0% {
    left: 0;
}
50% {
    left: ${LimiteDeslocamento} ;
}
100% {
    left: 0 ;
}
`

export { MovLeft_subBanner, LimiteDeslocamento }