import { Box, Typography, styled } from "@mui/material"

const BalancedText = styled(Typography)`
  font-size : 2rem;
  margin-bottom : 1rem;
`

function Balance() {
    return (
        <Box>
            <BalancedText>Balanced : 100 </BalancedText>
        </Box>
    )
}

export default Balance;