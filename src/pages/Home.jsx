import { useNavigate } from "react-router-dom";
import {
  Box, Typography, Button, Container, Grid, Paper,
  Stack, Chip, Avatar,
  createTheme, ThemeProvider, CssBaseline, alpha,
} from "@mui/material";
import LockOpenRoundedIcon       from "@mui/icons-material/LockOpenRounded";
import ArrowForwardIcon          from "@mui/icons-material/ArrowForward";
import VerifiedOutlinedIcon      from "@mui/icons-material/VerifiedOutlined";
import FolderOpenOutlinedIcon    from "@mui/icons-material/FolderOpenOutlined";
import ReceiptLongOutlinedIcon   from "@mui/icons-material/ReceiptLongOutlined";
import InfoOutlinedIcon          from "@mui/icons-material/InfoOutlined";
import ScheduleOutlinedIcon      from "@mui/icons-material/ScheduleOutlined";
import GroupsOutlinedIcon        from "@mui/icons-material/GroupsOutlined";
import ArticleOutlinedIcon       from "@mui/icons-material/ArticleOutlined";
import EmailOutlinedIcon         from "@mui/icons-material/EmailOutlined";
import ScienceOutlinedIcon       from "@mui/icons-material/ScienceOutlined";

import { PublicNavbar, PublicFooter } from "./public/PublicLayout";

/* ══════════════════════════ THEME ══════════════════════════ */
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary:    { main: "#E8440A", dark: "#B83208", light: "#F26234" },
    background: { default: "#F2F2F2", paper: "#FFFFFF" },
    text:       { primary: "#111111", secondary: "#666666" },
  },
  typography: { fontFamily: "'Outfit','Inter',sans-serif", h1: { fontWeight: 800 }, h2: { fontWeight: 800 } },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: "none", fontWeight: 600, fontFamily: "'Outfit',sans-serif", borderRadius: "999px" } } },
    MuiPaper:  { styleOverrides: { root: { backgroundImage: "none" } } },
  },
  shape: { borderRadius: 12 },
});

/* ══════════════════════════ NAV CARDS ══════════════════════════ */
const NAV_CARDS = [
  {
    to: "/presentation",
    icon: <InfoOutlinedIcon sx={{ fontSize: 26 }}/>,
    color: "#7C3AED",
    bg: "#F5F3FF",
    badge: "Institutionnel",
    title: "Présentation",
    desc: "Découvrez Sonatrach, la compagnie nationale des hydrocarbures, et la Direction Centrale Recherche & Développement.",
  },
  {
    to: "/procedure",
    icon: <VerifiedOutlinedIcon sx={{ fontSize: 26 }}/>,
    color: "#E8440A",
    bg: "#FEF0EB",
    badge: "Registre officiel",
    title: "Brevets Acceptés",
    desc: "Consultez l'ensemble des brevets d'invention délivrés et acceptés au nom de Sonatrach par l'INAPI.",
  },
  {
    to: "/dossier",
    icon: <FolderOpenOutlinedIcon sx={{ fontSize: 26 }}/>,
    color: "#2563EB",
    bg: "#EFF6FF",
    badge: "Brevet",
    title: "Dossier à préparer",
    desc: "Liste complète des pièces à fournir pour une demande de brevet d'invention à l'INAPI.",
  },
  {
    to: "/tarifs",
    icon: <ReceiptLongOutlinedIcon sx={{ fontSize: 26 }}/>,
    color: "#059669",
    bg: "#ECFDF5",
    badge: "Barème officiel",
    title: "Tarifs INAPI",
    desc: "Taxes de dépôt, d'annuité, de publication et de priorité. Différenciées par type de déposant.",
  },
];

const STATS = [
  { icon: <ArticleOutlinedIcon/>,  n: "1 240", l: "Brevets déposés" },
  { icon: <VerifiedOutlinedIcon/>, n: "853",   l: "Brevets délivrés" },
  { icon: <ScheduleOutlinedIcon/>, n: "387",   l: "En traitement" },
  { icon: <GroupsOutlinedIcon/>,   n: "2 400", l: "Agents enregistrés" },
];

/* ══════════════════════════ COMPONENT ══════════════════════════ */
export default function Home() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap'); html{scroll-behavior:smooth}`}</style>

      <PublicNavbar/>

      {/* ══ HERO ══ */}
      <Box sx={{ pt: "66px", background: "#0C0C0C", position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", top: "-8%", right: "-4%", width: { xs: 260, md: 480 }, height: { xs: 260, md: 480 }, borderRadius: "50%", background: "radial-gradient(circle,rgba(232,68,10,0.85) 0%,rgba(180,40,5,0.40) 40%,transparent 70%)", filter: "blur(45px)", pointerEvents: "none" }}/>
        <Box sx={{ position: "absolute", top: "25%", right: "10%", width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle,rgba(245,158,11,0.28) 0%,transparent 70%)", filter: "blur(28px)", pointerEvents: "none" }}/>

        <Container maxWidth="md" sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 7, md: 11 }, textAlign: "center", position: "relative", zIndex: 1 }}>
          <Chip label="Plateforme officielle DC R&D"
            sx={{ mb: 4, background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.72)", border: "1px solid rgba(255,255,255,0.13)", fontWeight: 600, fontSize: 12, px: 1, backdropFilter: "blur(8px)" }}
          />
          <Typography variant="h1" sx={{
            fontSize: { xs: 34, sm: 50, md: 68 }, fontWeight: 900, color: "white",
            lineHeight: 1.06, letterSpacing: { xs: "-1.5px", md: "-3px" }, mb: 2.5,
          }}>
            Protégez vos<br/>
            <Box component="span" sx={{ background: "linear-gradient(90deg,#F97316,#FBBF24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Inventions
            </Box>{" "}au sein<br/>de Sonatrach.
          </Typography>
          <Typography sx={{ fontSize: { xs: 15, md: 17 }, color: "rgba(255,255,255,0.50)", lineHeight: 1.80, mb: 5, maxWidth: 500, mx: "auto" }}>
            Plateforme officielle de gestion des brevets et de la propriété industrielle.
            Consultez les brevets acceptés, préparez votre dossier et accédez à votre espace agent.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" useFlexGap>
            <Button variant="contained" color="primary" size="large"
              onClick={() => navigate("/procedure")}
              sx={{ px: 4, py: 1.6, fontSize: 15, fontWeight: 700, borderRadius: "999px",
                boxShadow: "0 6px 24px rgba(232,68,10,0.50)",
                "&:hover": { boxShadow: "0 10px 36px rgba(232,68,10,0.65)", transform: "translateY(-2px)" },
                transition: "all .25s" }}
            >Voir les brevets acceptés</Button>
            <Button variant="outlined" size="large"
              onClick={() => navigate("/login")}
              startIcon={<LockOpenRoundedIcon/>}
              sx={{ px: 4, py: 1.6, fontSize: 15, fontWeight: 600, borderRadius: "999px",
                border: "1.5px solid rgba(255,255,255,0.22)", color: "white",
                "&:hover": { background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.50)" } }}
            >Se connecter</Button>
          </Stack>

          {/* Email */}
          <Box sx={{ mt: 3.5, display: "inline-flex", alignItems: "center", gap: 1.2,
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "999px", px: 2.5, py: 1, backdropFilter: "blur(8px)" }}>
            <EmailOutlinedIcon sx={{ fontSize: 15, color: "#F97316" }}/>
            <Typography component="a" href="mailto:demande.brevet@sonatrach.dz"
              sx={{ fontSize: 13, color: "rgba(255,255,255,0.65)", textDecoration: "none",
                fontWeight: 500, "&:hover": { color: "#F97316" } }}>
              demande.brevet@sonatrach.dz
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ══ STATS BAR ══ */}
      <Box sx={{ background: "white", borderBottom: "1px solid #EBEBEB", borderTop: "1px solid #EBEBEB" }}>
        <Container maxWidth="lg">
          <Grid container>
            {STATS.map(({ icon, n, l }, i) => (
              <Grid item xs={6} md={3} key={l}>
                <Box sx={{ py: 3.5, px: 2, textAlign: "center", borderRight: i < 3 ? "1px solid #F0F0F0" : "none",
                  transition: "background .2s", "&:hover": { background: "#FEF8F5" } }}>
                  <Box sx={{ color: "#E8440A", mb: 1, "& svg": { fontSize: 22 } }}>{icon}</Box>
                  <Typography sx={{ fontSize: 30, fontWeight: 800, color: "#E8440A", lineHeight: 1 }}>{n}</Typography>
                  <Typography sx={{ fontSize: 12, color: "#AAA", mt: 0.7, fontWeight: 500 }}>{l}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ══ NAV CARDS ══ */}
      <Box sx={{ background: "#F2F2F2", py: 9 }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#E8440A", letterSpacing: "2px", textTransform: "uppercase", mb: 1.5 }}>
            Informations & Guides
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 34 }, letterSpacing: "-1.2px", color: "#111", mb: 1.5 }}>
            Tout ce qu'il faut savoir
          </Typography>
          <Typography sx={{ fontSize: 15, color: "#888", mb: 5, maxWidth: 520 }}>
            Consultez les pages dédiées pour chaque étape de votre démarche de protection.
          </Typography>

          <Grid container spacing={3}>
            {NAV_CARDS.map(({ to, icon, color, bg, badge, title, desc }) => (
              <Grid item xs={12} sm={6} md={3} key={to}>
                <Paper
                  onClick={() => navigate(to)}
                  sx={{
                    p: 3.5, borderRadius: "18px", border: "1.5px solid #E8E8E8",
                    height: "100%", cursor: "pointer",
                    transition: "all .25s",
                    "&:hover": { borderColor: color, boxShadow: `0 12px 36px ${alpha(color, 0.14)}`, transform: "translateY(-5px)" },
                  }}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={2.5}>
                    <Avatar sx={{ background: bg, color, width: 52, height: 52, "& svg": { fontSize: 26 } }}>{icon}</Avatar>
                    <Chip label={badge} size="small"
                      sx={{ background: bg, color, fontWeight: 700, fontSize: 11, border: `1px solid ${alpha(color, 0.20)}` }}/>
                  </Stack>
                  <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#111", mb: 1, lineHeight: 1.3 }}>{title}</Typography>
                  <Typography sx={{ fontSize: 13, color: "#888", lineHeight: 1.72, mb: 3 }}>{desc}</Typography>
                  <Stack direction="row" alignItems="center" spacing={0.8}>
                    <Typography sx={{ fontWeight: 700, fontSize: 13.5, color }}>Consulter</Typography>
                    <ArrowForwardIcon sx={{ fontSize: 16, color }}/>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ══ SONATRACH INTRO ══ */}
      <Box sx={{ background: "white", py: 9, borderTop: "1px solid #EBEBEB" }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="flex-start">
            {/* Sonatrach */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4, borderRadius: "20px", border: "1.5px solid #EBEBEB", height: "100%" }}>
                <Stack direction="row" spacing={2} alignItems="center" mb={2.5}>
                  <Avatar sx={{ background: "#FEF0EB", color: "#E8440A", width: 52, height: 52 }}>
                    <ScienceOutlinedIcon sx={{ fontSize: 26 }}/>
                  </Avatar>
                  <Box>
                    <Typography sx={{ fontWeight: 900, fontSize: 20, color: "#111", lineHeight: 1.1 }}>Sonatrach</Typography>
                    <Typography sx={{ fontSize: 12.5, color: "#AAA" }}>Compagnie nationale algérienne des hydrocarbures</Typography>
                  </Box>
                </Stack>
                <Typography sx={{ fontSize: 14.5, color: "#555", lineHeight: 1.85, mb: 2.5 }}>
                  Active dans l'<strong>exploration</strong>, la production, le transport, le raffinage
                  et la commercialisation du pétrole et du gaz. Elle valorise les ressources énergétiques
                  nationales pour soutenir le développement économique et social du pays.
                </Typography>
                <Button variant="outlined" color="primary"
                  onClick={() => navigate("/presentation")}
                  endIcon={<ArrowForwardIcon/>}
                  sx={{ fontWeight: 700, borderWidth: 1.5 }}
                >En savoir plus</Button>
              </Paper>
            </Grid>
            {/* DC R&D */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4, borderRadius: "20px", border: "1.5px solid #EBEBEB", height: "100%" }}>
                <Stack direction="row" spacing={2} alignItems="center" mb={2.5}>
                  <Avatar sx={{ background: "#EFF6FF", color: "#2563EB", width: 52, height: 52 }}>
                    <ArticleOutlinedIcon sx={{ fontSize: 26 }}/>
                  </Avatar>
                  <Box>
                    <Typography sx={{ fontWeight: 900, fontSize: 20, color: "#111", lineHeight: 1.1 }}>DC R&D</Typography>
                    <Typography sx={{ fontSize: 12.5, color: "#AAA" }}>Direction Centrale Recherche & Développement</Typography>
                  </Box>
                </Stack>
                <Typography sx={{ fontSize: 14.5, color: "#555", lineHeight: 1.85, mb: 2.5 }}>
                  Chargée de promouvoir et mettre en œuvre la <strong>recherche appliquée</strong> et
                  de développer des technologies innovantes dans les métiers de l'entreprise.
                  Gestionnaire du registre officiel des brevets Sonatrach.
                </Typography>
                <Button variant="outlined"
                  onClick={() => navigate("/presentation")}
                  endIcon={<ArrowForwardIcon/>}
                  sx={{ fontWeight: 700, borderWidth: 1.5, borderColor: "#2563EB", color: "#2563EB",
                    "&:hover": { background: "#EFF6FF", borderColor: "#2563EB" } }}
                >Voir l'organisation</Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ══ CTA LOGIN ══ */}
      <Box sx={{ background: "#0C0C0C", py: 10, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", bottom: "-20%", left: "50%", transform: "translateX(-50%)", width: 700, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(232,68,10,0.20) 0%,transparent 70%)", filter: "blur(45px)", pointerEvents: "none" }}/>
        <Container maxWidth="sm" sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 46 }, fontWeight: 900, color: "white", letterSpacing: "-1.8px", mb: 2, lineHeight: 1.08 }}>
            Accédez à votre{" "}
            <Box component="span" sx={{ background: "linear-gradient(90deg,#F97316,#FBBF24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              espace agent
            </Box>.
          </Typography>
          <Typography sx={{ fontSize: 16, color: "rgba(255,255,255,0.42)", mb: 5, lineHeight: 1.80 }}>
            Déposez, suivez et gérez vos brevets directement en ligne.
          </Typography>
          <Button variant="contained" color="primary" size="large"
            onClick={() => navigate("/login")}
            startIcon={<LockOpenRoundedIcon/>}
            sx={{ px: 5.5, py: 1.9, fontSize: 15, fontWeight: 700, borderRadius: "999px",
              boxShadow: "0 8px 32px rgba(232,68,10,0.50)",
              "&:hover": { boxShadow: "0 14px 50px rgba(232,68,10,0.65)", transform: "translateY(-2px)" },
              transition: "all .25s" }}
          >Se connecter maintenant</Button>
        </Container>
      </Box>

      <PublicFooter/>
    </ThemeProvider>
  );
}