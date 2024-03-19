
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://i.pinimg.com/564x/18/ef/01/18ef019b142241cae69c1a53ab25ae36.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
           
                <Text variant="h5">
                   Instagram
                    <Link href="https://www.instagram.com/deepak_7n/" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                   Email 
                    <Link href="mailto:milkyway4a@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;