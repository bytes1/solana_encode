import { Box, Image, Text } from '@chakra-ui/react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { ConnectionProvider, WalletProvider, useWallet, useConnection } from '@solana/wallet-adapter-react';
import React, { FC, ReactNode, useMemo } from 'react';

const Header1: React.FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    console.log('data:', publicKey);
    return (
        <Box h="50px" w="100%" display="flex" justifyContent="space-between">
            <Box display="flex">
                <Box>
                    <Image
                        borderRadius="full"
                        boxSize="60px"
                        src="https://i.postimg.cc/q7DJ5kCR/logo.png"
                        alt="Dan Abramov"
                    />
                </Box>

                <Box alignItems="baseline">
                    <Text fontSize="4xl" as="b" color="white">
                        DEFIHUB DAO
                    </Text>
                </Box>
            </Box>

            <Box right={'20'}>
                <WalletMultiButton />
            </Box>
        </Box>
    );
};
export default Header1;
