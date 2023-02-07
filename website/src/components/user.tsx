import { Box, Image, Text } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { ConnectionProvider, WalletProvider, useWallet, useConnection } from '@solana/wallet-adapter-react';
import React, { FC, ReactNode, useMemo } from 'react';

const User: React.FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    console.log('data:', publicKey);
    return (
        <Tabs>
            <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};
export default Tab;
