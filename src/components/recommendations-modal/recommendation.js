import { Button, CircularProgress, Grid } from "@mui/material";

import "./recommendation.css";

export default function Recommendation(props) {
    const {
        recommendation: {
            logo,
            name,
            cuisine,
            domain,
            tld,
            meta_description,
        } = {},
        isLoading = false,
    } = props;

    const buttonStyles= [
        {
          alignItems: "center", 
          backgroundColor: "#ffd404", 
          border: "2px solid #000", 
          boxSizing: "border-box", 
          color: "#000", 
          cursor: "pointer", 
          display: "inline-flex", 
          fill: "#000", 
          fontFamily: "Inter,sans-serif", 
          fontSize: "16px", 
          fontWeight: "600", 
          height: "48px", 
          justifyContent: "center", 
          letterSpacing: "-.8px", 
          lineHeight: "24px", 
          minWidth: "140px", 
          outline: "0", 
          padding: "0 17px", 
          textAlign: "center", 
          textDecoration: "none", 
          transition: "all .3s", 
          userSelect: "none", 
          WebkitUserSelect: "none", 
          touchAction: "manipulation"
        },
        {'&:focus': {
          color: "#171e29"
        }},
        {'&:hover': {
          backgroundColor: "#171e29", 
          color: "#ffd404", 
          borderColor: "#ffd404", 
          fill: "#ffd404"
        }},
        {'&:active': {
          backgroundColor: "#171e29", 
          color: "#ffd404", 
          borderColor: "#ffd404", 
          fill: "#ffd404"
        }}
]

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
        const url = `https://${domain}.${tld}`;
        window.open(url, "_blank");
    };

    return (
        <Grid container spacing={2} className="recommendation" sx={{marginLeft: '5%'}}>
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
                        sx={buttonStyles}
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