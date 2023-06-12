import {Box} from '@mui/material';
interface TabPabelProps {
    value: number;
    index: number;
    children: React.ReactNode;
}
const TabPanel: React.FC<TabPabelProps>=({value,index,children})=>{
    return (
        <div hidden={value !== index}>
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
};

export default TabPanel;
