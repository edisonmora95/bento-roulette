import { Box, Grid, Modal, Typography } from "@mui/material";
import RecommendationsForm from "./form";
import Recommendation from "./recommendation";

function RecommendationsModal(props) {
    const {
        isOpen = false,
        handleClose,
    } = props;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1000,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    
    return (
        <Modal open={isOpen} onClose={handleClose}>
            <Box sx={style}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <RecommendationsForm />
                    </Grid>
                    <Grid item xs={8}>
                        <Recommendation />
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
}

export default RecommendationsModal;
