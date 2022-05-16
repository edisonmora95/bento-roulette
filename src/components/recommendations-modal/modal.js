import { Box, Grid, Modal } from "@mui/material";
import { useState } from "react";
import RecommendationsService from "../../services/recommendations.service";
import RecommendationsForm from "./form";
import Recommendation from "./recommendation";

function RecommendationsModal(props) {
    const {
        isOpen = false,
        handleClose,
    } = props;

    const [recommendation, setRecommendation] = useState({});
    const [isLoading, setIsLoading] = useState(false);

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

    const submitHandler = async (priceRange, address) => {
        try {
            setIsLoading(true);
            const recommendationService = new RecommendationsService();
            const payload = {
                price_range: priceRange,
                address,
            };
            const result = await recommendationService.getRecommendations(payload);
            console.log(result);
            setRecommendation(result);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    
    return (
        <Modal open={isOpen} onClose={handleClose}>
            <Box sx={style}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <RecommendationsForm submitHandler={submitHandler} isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={8}>
                        <Recommendation recommendation={recommendation} isLoading={isLoading}/>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
}

export default RecommendationsModal;
