import { Box, Modal, Typography } from "@mui/material";

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
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    
    return (
        <Modal open={isOpen} onClose={handleClose}>
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
            </Box>
        </Modal>
    );
}

export default RecommendationsModal;
