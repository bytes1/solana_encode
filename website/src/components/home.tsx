import { Box, Image, Text, Stack } from '@chakra-ui/react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { FC, ReactNode, useMemo } from 'react';

const Home: React.FC = () => {
    return (
        <Box w="100%" h="100%">
            <Stack>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <Box textAlign="center" color="tomato">
                    <Text fontSize="5xl" color="white" mb="20" as="b">
                        SIMPLIFYING THE WORLD OF DECENTRALIZED FINANCE
                    </Text>
                    <br />
                    <Text fontSize="2xl" color="white" mb="20" as="b" noOfLines={[1, 2, 3]}>
                        DefiHub DAO is a decentralized autonomous organization (DAO) in the DeFi space that aims to{' '}
                        <br />
                        assist users in navigating the DeFi landscape and make it more accessible and user-friendly.
                    </Text>
                </Box>
            </Stack>
        </Box>
    );
};
export default Home;
