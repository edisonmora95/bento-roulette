import { Button, CircularProgress, Grid } from "@mui/material";

import "./recommendation.css";

export default function Recommendation(props) {
    const {
        recommendation: {
            logo,
            name,
            cuisine,
            domain,
            meta_description,
        } = {},
        isLoading = false,
    } = props;

    if (isLoading) {
        return (
            <div className="recommendation-loading">
                <CircularProgress />
            </div>
        );
    }

    if (!name) {
        return (<></>);
    }

    const onVisitStoreClick = () => {
        const url = `https://${domain}.bentosandbox.com`;
        window.open(url, "_blank");
    };

    return (
        <Grid container spacing={2} className="recommendation">
            <Grid className="recommendation-img-container" item xs={4}>
                <img src={logo} width={200} alt="Store logo"/>
            </Grid>
            <Grid item xs={8}>
                <header>
                    <h4>{name}</h4>
                    <span>{cuisine}</span>
                </header>
                <section>
                    <span>{meta_description}</span>
                </section>
                <footer className="recommendation-footer">
                    <Button
                        className="recommendation-btn"
                        variant="contained"
                        onClick={onVisitStoreClick}
                    >
                        Visit Restaurant Page
                    </Button>
                </footer>
            </Grid>
        </Grid>
    );
}