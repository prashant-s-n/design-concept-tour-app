import { Stack, VStack, Image, HStack, Text, Container } from "@chakra-ui/react";
import ProductNavigation from "../Common/ProductNavigation.component";
import DestinationList from "./DestinationList.component";
import FeatureChooser from "./FeatureChooser.component";
import {useState} from 'react';
import ProductFooter from "../Common/ProductFooter.component";

function CostEstimator(props) {
    let [total, setTotal] = useState(0);
    return (
        <>
            <ProductNavigation moduleName="Cost Estimator"/>
                <HStack alignItems={'flex-start'}  align={'flex-start'}>
                    <FeatureChooser setTotal={setTotal} total={total}/>
                    <DestinationList setTotal={setTotal} total={total}/>
                </HStack>
            <ProductFooter/>
        </>
    );
}

export default CostEstimator;