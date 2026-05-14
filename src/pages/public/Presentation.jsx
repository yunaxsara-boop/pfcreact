import { useNavigate } from "react-router-dom";
import {
  Box, Typography, Button, Container, Grid, Paper,
  Stack, Avatar, List, ListItem, ListItemIcon, ListItemText,
  ThemeProvider, CssBaseline, alpha, Divider,
} from "@mui/material";
import ArrowForwardIcon             from "@mui/icons-material/ArrowForward";
import ScienceOutlinedIcon          from "@mui/icons-material/ScienceOutlined";
import LocalGasStationOutlinedIcon  from "@mui/icons-material/LocalGasStationOutlined";
import EngineeringOutlinedIcon      from "@mui/icons-material/EngineeringOutlined";
import WaterDropOutlinedIcon        from "@mui/icons-material/WaterDropOutlined";
import StorageOutlinedIcon          from "@mui/icons-material/StorageOutlined";
import ShoppingCartOutlinedIcon     from "@mui/icons-material/ShoppingCartOutlined";
import CheckCircleOutlineIcon       from "@mui/icons-material/CheckCircleOutline";
import AccountTreeOutlinedIcon      from "@mui/icons-material/AccountTreeOutlined";
import LightbulbOutlinedIcon        from "@mui/icons-material/LightbulbOutlined";
import GroupsOutlinedIcon           from "@mui/icons-material/GroupsOutlined";
import VerifiedOutlinedIcon         from "@mui/icons-material/VerifiedOutlined";
import BiotechOutlinedIcon          from "@mui/icons-material/BiotechOutlined";
import MonitorOutlinedIcon          from "@mui/icons-material/MonitorOutlined";
import SettingsOutlinedIcon         from "@mui/icons-material/SettingsOutlined";

import { lightTheme } from "../Home";
import { PublicNavbar, PublicBreadcrumb, PublicFooter } from "./PublicLayout";

/* ── Données ── */
const ACTIVITIES = [
  { icon: <EngineeringOutlinedIcon/>, color: "#E8440A", bg: "#FEF0EB",
    title: "Exploration-Production (E&P)",
    desc: "Élaboration et application des politiques d'exploration, de développement et d'exploitation de l'amont pétrolier et gazier." },
  { icon: <WaterDropOutlinedIcon/>,   color: "#2563EB", bg: "#EFF6FF",
    title: "Transport par Canalisations (TRC)",
    desc: "Politiques et stratégies en matière de transport des hydrocarbures par canalisations." },
  { icon: <StorageOutlinedIcon/>,     color: "#7C3AED", bg: "#F5F3FF",
    title: "Liquéfaction et Séparation (LQS)",
    desc: "Exploitation, gestion et développement des activités de liquéfaction et de séparation des gaz." },
  { icon: <LocalGasStationOutlinedIcon/>, color: "#059669", bg: "#ECFDF5",
    title: "Raffinage et Pétrochimie (RPC)",
    desc: "Exploitation, gestion et développement du raffinage et de la pétrochimie." },
  { icon: <ShoppingCartOutlinedIcon/>, color: "#D97706", bg: "#FFFBEB",
    title: "Commercialisation (COM)",
    desc: "Politiques et stratégies de commercialisation des hydrocarbures à l'extérieur et sur le marché national." },
];

const DCRD_DIRECTIONS = [
  { icon: <ScienceOutlinedIcon/>,   color: "#E8440A", bg: "#FEF0EB",
    title: "Direction Appui Scientifique et Technique",
    desc: "Soutien à la recherche appliquée dans l'ensemble des métiers de l'entreprise." },
  { icon: <MonitorOutlinedIcon/>,   color: "#2563EB", bg: "#EFF6FF",
    title: "Direction Techniques Numériques Avancées",
    desc: "Intégration des technologies numériques, veille technologique et innovation digitale au cœur des processus." },
  { icon: <BiotechOutlinedIcon/>,   color: "#7C3AED", bg: "#F5F3FF",
    title: "Direction des Laboratoires R&D",
    desc: "Laboratoires basés à Boumerdes, en synergie avec la Division laboratoires de l'activité E&P." },
  { icon: <SettingsOutlinedIcon/>,  color: "#059669", bg: "#ECFDF5",
    title: "Sous-Direction Administration, Logistique et Moyens",
    desc: "Gestion des ressources administratives, logistiques et des moyens de la DC R&D." },
  { icon: <AccountTreeOutlinedIcon/>, color: "#D97706", bg: "#FFFBEB",
    title: "Directions Projets de Recherche",
    desc: "Pilotage des projets de recherche appliquée selon les priorités stratégiques de Sonatrach." },
  { icon: <GroupsOutlinedIcon/>,    color: "#0891B2", bg: "#F0FDFA",
    title: "Conseil Scientifique & Technique (CST)",
    desc: "Organe d'expertise et de validation scientifique des travaux de recherche et des demandes de brevets." },
];

const SONATRACH_MISSIONS = [
  "Valoriser les ressources énergétiques nationales pour soutenir le développement économique et social.",
  "Assurer l'exploration, la production, le transport, le raffinage et la commercialisation des hydrocarbures.",
  "Diversifier les activités vers l'électricité, l'eau et le transport.",
  "Contribuer au développement durable, à la sécurité et à la protection de l'environnement.",
  "Promouvoir la recherche appliquée et l'innovation technologique dans les métiers de base.",
];

/* ── Component ── */
export default function Presentation() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');`}</style>

      <PublicNavbar/>
      <PublicBreadcrumb current="Présentation"/>

      {/* ── Hero ── */}
      <Box sx={{
        background: "linear-gradient(135deg,#0C0C0C 0%,#0F0A00 60%,#0C0C0C 100%)",
        py: { xs: 7, md: 10 }, position: "relative", overflow: "hidden",
      }}>
        <Box sx={{ position: "absolute", top: "-10%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(232,68,10,0.70) 0%,transparent 65%)", filter: "blur(50px)", pointerEvents: "none" }}/>
        <Box sx={{ position: "absolute", bottom: "-5%", left: "-5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(37,99,235,0.30) 0%,transparent 65%)", filter: "blur(40px)", pointerEvents: "none" }}/>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#F97316", letterSpacing: "2px", textTransform: "uppercase", mb: 1.5 }}>
            Présentation institutionnelle
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 30, md: 52 }, fontWeight: 900, color: "white", letterSpacing: "-2px", lineHeight: 1.08, mb: 2 }}>
            Sonatrach &{" "}
            <Box component="span" sx={{ background: "linear-gradient(90deg,#F97316,#FBBF24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              DC R&D
            </Box>
          </Typography>
          <Typography sx={{ fontSize: 16, color: "rgba(255,255,255,0.52)", lineHeight: 1.82, maxWidth: 600 }}>
            La compagnie nationale algérienne des hydrocarbures et sa Direction Centrale
            Recherche & Développement, moteur de l'innovation technologique nationale.
          </Typography>
        </Container>
      </Box>

      {/* ── SONATRACH : Qui sommes-nous ── */}
      <Box sx={{ background: "white", py: 9, borderTop: "1px solid #EBEBEB" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="flex-start">
            <Grid item xs={12} md={5}>
              <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#E8440A", letterSpacing: "2px", textTransform: "uppercase", mb: 1.5 }}>
                L'entreprise
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 36 }, letterSpacing: "-1.5px", color: "#111", mb: 2, fontWeight: 900 }}>
                Sonatrach
              </Typography>
              <Typography sx={{ fontSize: 15, color: "#555", lineHeight: 1.85, mb: 2.5 }}>
                Sonatrach est la <strong>compagnie nationale algérienne des hydrocarbures</strong>,
                active dans l'exploration, la production, le transport, le raffinage et la
                commercialisation du pétrole et du gaz.
              </Typography>
              <Typography sx={{ fontSize: 15, color: "#555", lineHeight: 1.85, mb: 3 }}>
                En tant qu'acteur intégré du secteur énergétique, elle a diversifié ses activités
                vers l'électricité, l'eau et le transport, tout en s'engageant pour le développement
                durable, la sécurité et la protection de l'environnement.
              </Typography>
              <Paper sx={{ p: 2.5, background: "#FEF0EB", border: "1px solid rgba(232,68,10,0.18)", borderRadius: "14px" }}>
                <Typography sx={{ fontSize: 12, fontWeight: 700, color: "#E8440A", textTransform: "uppercase", letterSpacing: "1px", mb: 1.5 }}>
                  Missions principales
                </Typography>
                <List dense disablePadding>
                  {SONATRACH_MISSIONS.map((m, i) => (
                    <ListItem key={i} disableGutters alignItems="flex-start" sx={{ mb: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 22, mt: 0.3 }}>
                        <CheckCircleOutlineIcon sx={{ fontSize: 14, color: "#E8440A" }}/>
                      </ListItemIcon>
                      <ListItemText primary={m} primaryTypographyProps={{ fontSize: 13, color: "#7A2600", lineHeight: 1.65 }}/>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography sx={{ fontSize: 13, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "1.5px", mb: 3 }}>
                Structures Opérationnelles
              </Typography>
              <Stack spacing={2}>
                {ACTIVITIES.map(({ icon, color, bg, title, desc }) => (
                  <Paper key={title} sx={{
                    p: 2.5, borderRadius: "14px", border: "1.5px solid #EBEBEB",
                    display: "flex", gap: 2, alignItems: "flex-start",
                    transition: "all .22s",
                    "&:hover": { borderColor: color, boxShadow: `0 8px 24px ${alpha(color, 0.10)}`, transform: "translateX(4px)" },
                  }}>
                    <Avatar sx={{ background: bg, color, width: 42, height: 42, flexShrink: 0, "& svg": { fontSize: 20 } }}>
                      {icon}
                    </Avatar>
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#111", mb: 0.4 }}>{title}</Typography>
                      <Typography sx={{ fontSize: 13, color: "#666", lineHeight: 1.65 }}>{desc}</Typography>
                    </Box>
                  </Paper>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── DC R&D ── */}
      <Box sx={{ background: "#F2F2F2", py: 9, borderTop: "1px solid #EBEBEB" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} mb={6}>
            <Grid item xs={12} md={8}>
              <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#E8440A", letterSpacing: "2px", textTransform: "uppercase", mb: 1.5 }}>
                Direction Centrale
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 38 }, letterSpacing: "-1.5px", color: "#111", mb: 2, fontWeight: 900 }}>
                Direction Centrale Recherche{" "}
                <Box component="span" sx={{ color: "#E8440A" }}>&amp; Développement</Box>
              </Typography>
              <Typography sx={{ fontSize: 15, color: "#555", lineHeight: 1.85, mb: 2 }}>
                La <strong>DC R&D</strong> est chargée de promouvoir et de mettre en œuvre la recherche
                appliquée et de développer des technologies et procédés innovants, performants et
                respectueux de l'environnement dans l'ensemble des métiers de l'entreprise.
              </Typography>
              <Typography sx={{ fontSize: 15, color: "#555", lineHeight: 1.85 }}>
                Elle dispose de <strong>laboratoires à Boumerdes</strong> et travaille en synergie continue
                avec les structures de la Division laboratoires de l'activité Exploration-Production.
                Sa mission principale consiste à contribuer à la résolution des problèmes rencontrés
                dans les activités pétrolières et gazières.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, borderRadius: "18px", border: "1.5px solid #E0E0E0", height: "100%" }}>
                <Typography sx={{ fontSize: 13, fontWeight: 700, color: "#E8440A", textTransform: "uppercase", letterSpacing: "1px", mb: 2.5 }}>
                  Département TDTNI
                </Typography>
                <Typography sx={{ fontSize: 13.5, color: "#555", lineHeight: 1.78, mb: 2 }}>
                  Le Département <strong>Traitement des données, Transformations Numériques et Innovation</strong> a pour mission :
                </Typography>
                <Stack spacing={1.5}>
                  {[
                    "Promotion de la recherche et du développement des technologies numériques.",
                    "Maîtrise des technologies cœur de métier par des capacités internes.",
                    "Adaptation et mise à niveau permanente des technologies et processus.",
                  ].map((item, i) => (
                    <Box key={i} sx={{ display: "flex", gap: 1.2, alignItems: "flex-start" }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: "#E8440A", mt: 0.8, flexShrink: 0 }}/>
                      <Typography sx={{ fontSize: 13, color: "#666", lineHeight: 1.65 }}>{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>

          {/* Organisation */}
          <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#E8440A", letterSpacing: "2px", textTransform: "uppercase", mb: 1 }}>
            Organisation
          </Typography>
          <Typography variant="h3" sx={{ fontSize: { xs: 20, md: 28 }, letterSpacing: "-1px", color: "#111", mb: 4, fontWeight: 800 }}>
            Structure interne de la DC R&D
          </Typography>
          <Grid container spacing={3}>
            {DCRD_DIRECTIONS.map(({ icon, color, bg, title, desc }) => (
              <Grid item xs={12} sm={6} md={4} key={title}>
                <Paper sx={{
                  p: 3, borderRadius: "16px", border: "1px solid #E8E8E8", height: "100%",
                  transition: "all .22s",
                  "&:hover": { boxShadow: `0 10px 32px ${alpha(color, 0.12)}`, transform: "translateY(-3px)" },
                }}>
                  <Avatar sx={{ background: bg, color, width: 44, height: 44, mb: 2, "& svg": { fontSize: 22 } }}>
                    {icon}
                  </Avatar>
                  <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#111", mb: 1, lineHeight: 1.35 }}>{title}</Typography>
                  <Typography sx={{ fontSize: 12.5, color: "#777", lineHeight: 1.70 }}>{desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box sx={{ background: "white", py: 7, borderTop: "1px solid #EBEBEB" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {[
              { to: "/procedure", label: "Brevets Acceptés →",  desc: "Consultez les brevets acceptés de Sonatrach" },
              { to: "/dossier",   label: "Dossier à préparer →", desc: "Pièces à fournir pour une demande de brevet" },
              { to: "/tarifs",    label: "Tarifs INAPI →",       desc: "Barème officiel des taxes par type de déposant" },
            ].map(({ to, label, desc }) => (
              <Grid item xs={12} md={4} key={to}>
                <Paper variant="outlined" onClick={() => navigate(to)} sx={{
                  p: 2.8, borderRadius: "14px", borderColor: "#DEDEDE", cursor: "pointer",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  transition: "all .22s",
                  "&:hover": { borderColor: "#E8440A", background: "#FEF8F5", boxShadow: "0 6px 20px rgba(232,68,10,0.09)" },
                }}>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: 15, color: "#E8440A" }}>{label}</Typography>
                    <Typography sx={{ fontSize: 12.5, color: "#888" }}>{desc}</Typography>
                  </Box>
                  <ArrowForwardIcon sx={{ color: "#E8440A", fontSize: 18 }}/>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <PublicFooter/>
    </ThemeProvider>
  );
}