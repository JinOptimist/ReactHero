import { AddReaction, Home, Settings } from '@mui/icons-material';
import Box from '@mui/material/Box';
function LefSideMenu() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Settings></Settings>
                <Home></Home>
                <AddReaction></AddReaction>
            </Box>
        </>
    );
}
export default LefSideMenu;