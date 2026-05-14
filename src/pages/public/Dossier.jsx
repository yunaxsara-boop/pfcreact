import { useNavigate } from "react-router-dom";
import {
  Box, Typography, Button, Container, Grid, Paper,
  Stack, Avatar, List, ListItem, ListItemIcon, ListItemText,
  Divider,
  ThemeProvider, CssBaseline, alpha,
} from "@mui/material";
import CheckCircleOutlineIcon     from "@mui/icons-material/CheckCircleOutline";
import OpenInNewIcon              from "@mui/icons-material/OpenInNew";
import ArrowForwardIcon           from "@mui/icons-material/ArrowForward";
import ArticleOutlinedIcon        from "@mui/icons-material/ArticleOutlined";
import InfoOutlinedIcon           from "@mui/icons-material/InfoOutlined";
import LockOutlinedIcon           from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon          from "@mui/icons-material/EmailOutlined";
import WarningAmberOutlinedIcon   from "@mui/icons-material/WarningAmberOutlined";
import CheckBoxOutlinedIcon       from "@mui/icons-material/CheckBoxOutlined";

import { lightTheme } from "../Home";
import { PublicNavbar, PublicBreadcrumb, PublicFooter } from "./PublicLayout";

/* ── Data ── */
const BREVET_DOCS = [
  { primary: "Mémoire descriptif en 2 exemplaires en langue française", secondary: "Doit contenir : titre, domaine technique, état de la technique antérieure, but de l'invention, énoncé des figures, présentation de l'essence de l'invention et mode de réalisation, revendications, abrégé (max 250 mots)" },
  { primary: "Mémoire descriptif en 1 exemplaire en langue arabe", secondary: "Traduction complète du mémoire français." },
  { primary: "4 exemplaires du formulaire de requête de délivrance INAPI", secondary: "Fournis par l'INAPI, signés par le premier responsable de la structure d'appartenance de l'inventeur." },
  { primary: "Document de priorité avec copie certifiée conforme", secondary: "À fournir dans un délai de 3 mois (si priorité revendiquée)." },
  { primary: "Cession du droit de priorité", secondary: "Si la priorité n'est pas au nom du déposant." },
  { primary: "Pouvoir original signé et daté", secondary: "En cas de représentation par un mandataire." },
  { primary: "Reçu de paiement des taxes", secondary: "Selon le barème en vigueur (acquitté par la DC R&D)." },
];

const MEMOIRE_SECTIONS = [
  "Titre de l'invention",
  "Domaine technique auquel se rapporte l'invention",
  "État de la technique antérieure",
  "But de l'invention",
  "Énoncé des figures (s'il y a lieu)",
  "Présentation de l'essence de l'invention",
  "Mode de réalisation de l'invention",
  "Revendications (principales et dépendantes)",
  "Abrégé descriptif (maximum 250 mots)",
];

/* ── Component ── */
export default function Dossier() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');`}</style>

      <PublicNavbar/>
      <PublicBreadcrumb current="Dossier à préparer"/>

      {/* ── Hero ── */}
      <Box sx={{ background: "linear-gradient(135deg,#0C0C0C 0%,#0F0A00 60%,#0C0C0C 100%)", py: { xs: 6, md: 9 }, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", top: "-15%", right: "-5%", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle,rgba(232,68,10,0.65) 0%,transparent 65%)", filter: "blur(50px)", pointerEvents: "none" }}/>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#F97316", letterSpacing: "2px", textTransform: "uppercase", mb: 1.5 }}>
            Préparation — Réf. I.5.1
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 28, md: 46 }, fontWeight: 900, color: "white", letterSpacing: "-2px", lineHeight: 1.08, mb: 2 }}>
            Dossier à préparer par
            <Box component="span" sx={{ background: "linear-gradient(90deg,#F97316,#FBBF24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {" "}l'inventeur
            </Box>
          </Typography>
          <Typography sx={{ fontSize: 15, color: "rgba(255,255,255,0.50)", lineHeight: 1.80, maxWidth: 560, mb: 4 }}>
            Pièces complètes à fournir pour une demande de brevet d'invention à l'INAPI.
          </Typography>
          <Paper sx={{ p: 2.5, background: "rgba(232,68,10,0.12)", border: "1px solid rgba(232,68,10,0.30)", borderRadius: "12px", maxWidth: 600 }}>
            <Stack direction="row" spacing={1.5} alignItems="flex-start">
              <WarningAmberOutlinedIcon sx={{ color: "#F97316", fontSize: 20, mt: 0.1, flexShrink: 0 }}/>
              <Typography sx={{ fontSize: 13.5, color: "rgba(255,255,255,0.75)", lineHeight: 1.72 }}>
                <strong style={{ color: "white" }}>Important :</strong> Toutes les pièces du dossier doivent être transmises à la{" "}
                <strong style={{ color: "white" }}>DC R&D</strong> avant tout dépôt à l'INAPI.
                L'invention doit rester secrète jusqu'au dépôt officiel.
              </Typography>
            </Stack>
          </Paper>
        </Container>
      </Box>

      {/* ── Brevet d'invention ── */}
      <Box sx={{ background: "#F2F2F2", py: 9 }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#E8440A", letterSpacing: "2px", textTransform: "uppercase", mb: 1 }}>
            Pièces requises
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 22, md: 32 }, letterSpacing: "-1px", color: "#111", mb: 5 }}>
            Dossier Brevet d'invention
          </Typography>

          <Paper sx={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #E0E0E0" }}>
            {/* Header */}
            <Box sx={{ background: "linear-gradient(135deg,#E8440A,#C2410C)", p: 3 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ background: "rgba(255,255,255,0.18)", color: "white", width: 48, height: 48 }}>
                  <ArticleOutlinedIcon sx={{ fontSize: 24 }}/>
                </Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: 18, color: "white" }}>Brevet d'invention</Typography>
                  <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.70)" }}>Mémoire FR (×2) + arabe (×1) + formulaire (×4)</Typography>
                </Box>
              </Stack>
            </Box>
            {/* Body */}
            <Box sx={{ p: 3 }}>
              <Grid container spacing={0}>
                {BREVET_DOCS.map((doc, i) => (
                  <Grid item xs={12} key={i}>
                    <Box>
                      <ListItem disableGutters alignItems="flex-start" sx={{ mb: 0.5, px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 28, mt: 0.3 }}>
                          <CheckBoxOutlinedIcon sx={{ fontSize: 17, color: "#E8440A" }}/>
                        </ListItemIcon>
                        <ListItemText
                          primary={doc.primary}
                          secondary={doc.secondary}
                          primaryTypographyProps={{ fontSize: 13.5, fontWeight: 600, color: "#111", lineHeight: 1.45 }}
                          secondaryTypographyProps={{ fontSize: 12, color: "#888", lineHeight: 1.65, mt: 0.3 }}
                        />
                      </ListItem>
                      {i < BREVET_DOCS.length - 1 && <Divider sx={{ my: 0.8, ml: 3.5 }}/>}
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Box mt={3}>
                <Button variant="outlined" color="primary"
                  href="https://drive.google.com/drive/folders/1SiAOm1sL1JEmJC5oZOa11A1i1-uW7Fvu"
                  target="_blank" rel="noopener"
                  endIcon={<OpenInNewIcon sx={{ fontSize: 15 }}/>}
                  sx={{ fontWeight: 700, borderWidth: 1.5 }}
                >Guide de rédaction du mémoire</Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* ── Contenu du mémoire descriptif ── */}
      <Box sx={{ background: "white", py: 9, borderTop: "1px solid #EBEBEB" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="flex-start">
            <Grid item xs={12} md={5}>
              <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#E8440A", letterSpacing: "2px", textTransform: "uppercase", mb: 1.5 }}>
                Rédaction
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: 22, md: 32 }, letterSpacing: "-1px", color: "#111", mb: 2 }}>
                Contenu du mémoire descriptif
              </Typography>
              <Typography sx={{ fontSize: 14.5, color: "#666", lineHeight: 1.82, mb: 3 }}>
                Le mémoire descriptif est la pièce centrale du dossier de brevet.
                Il doit être rédigé avec précision et couvrir obligatoirement toutes les sections suivantes.
              </Typography>
              <Paper sx={{ p: 2.5, background: "#FEF0EB", border: "1px solid rgba(232,68,10,0.18)", borderRadius: "12px", mb: 3 }}>
                <Stack direction="row" spacing={1.2} alignItems="flex-start">
                  <InfoOutlinedIcon sx={{ color: "#E8440A", fontSize: 18, mt: 0.15, flexShrink: 0 }}/>
                  <Typography sx={{ fontSize: 13.5, color: "#7A2600", lineHeight: 1.72 }}>
                    L'abrégé descriptif ne doit <strong>pas dépasser 250 mots</strong>.
                    Le mémoire doit être fourni en <strong>2 exemplaires en français</strong> et <strong>1 en arabe</strong>.
                  </Typography>
                </Stack>
              </Paper>
              <Button variant="outlined" color="primary"
                href="https://drive.google.com/drive/folders/1SiAOm1sL1JEmJC5oZOa11A1i1-uW7Fvu"
                target="_blank" rel="noopener"
                endIcon={<OpenInNewIcon sx={{ fontSize: 15 }}/>}
                sx={{ fontWeight: 700, borderWidth: 1.5 }}
              >Consulter le guide officiel</Button>
            </Grid>
            <Grid item xs={12} md={7}>
              <Grid container spacing={2}>
                {MEMOIRE_SECTIONS.map((s, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Paper variant="outlined" sx={{
                      p: 2.2, borderRadius: "12px", borderColor: "#E8E8E8",
                      display: "flex", alignItems: "flex-start", gap: 1.5,
                      transition: "all .2s", "&:hover": { borderColor: "#E8440A", background: "#FEF8F5" },
                    }}>
                      <Box sx={{ width: 26, height: 26, borderRadius: "8px", background: "#FEF0EB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, fontWeight: 800, color: "#E8440A" }}>
                        {String(i + 1).padStart(2, "0")}
                      </Box>
                      <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#333", lineHeight: 1.50, pt: 0.2 }}>{s}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Transmission + Confidentialité ── */}
      <Box sx={{ background: "#F2F2F2", py: 9, borderTop: "1px solid #EBEBEB" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3.5, borderRadius: "16px", border: "1px solid #E8E8E8", height: "100%" }}>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                  <Avatar sx={{ background: "#FEF0EB", color: "#E8440A", width: 44, height: 44 }}>
                    <EmailOutlinedIcon sx={{ fontSize: 22 }}/>
                  </Avatar>
                  <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#111" }}>Transmission à la DC R&D</Typography>
                </Stack>
                <Typography sx={{ fontSize: 14, color: "#555", lineHeight: 1.80, mb: 2 }}>
                  L'inventeur dépose l'original du dossier directement au niveau de la DC R&D,
                  <strong> daté et signé</strong>, contre un accusé de réception sur la lettre d'accompagnement.
                </Typography>
                <Typography sx={{ fontSize: 14, color: "#555", lineHeight: 1.80, mb: 2.5 }}>
                  En attendant la transmission officielle, les documents peuvent être envoyés par email :
                </Typography>
                <Box sx={{ p: 2, background: "#FEF0EB", borderRadius: "10px", display: "inline-flex", alignItems: "center", gap: 1.2 }}>
                  <EmailOutlinedIcon sx={{ fontSize: 16, color: "#E8440A" }}/>
                  <Typography component="a" href="mailto:demande.brevet@sonatrach.dz"
                    sx={{ fontSize: 14, color: "#E8440A", fontWeight: 700, textDecoration: "none" }}>
                    demande.brevet@sonatrach.dz
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3.5, borderRadius: "16px", border: "1px solid #E8E8E8", height: "100%" }}>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                  <Avatar sx={{ background: "#F5F3FF", color: "#7C3AED", width: 44, height: 44 }}>
                    <LockOutlinedIcon sx={{ fontSize: 22 }}/>
                  </Avatar>
                  <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#111" }}>Confidentialité &amp; Droits</Typography>
                </Stack>
                <List dense disablePadding>
                  {[
                    "L'invention doit rester secrète jusqu'au dépôt officiel à l'INAPI.",
                    "Le droit sur l'invention appartient à SONATRACH (sauf renonciation expresse).",
                    "SONATRACH met à disposition de l'inventeur ses techniques et moyens.",
                    "Si réalisée en partenariat : une convention précise les droits et obligations.",
                  ].map((item, i) => (
                    <ListItem key={i} disableGutters alignItems="flex-start" sx={{ mb: 0.7 }}>
                      <ListItemIcon sx={{ minWidth: 24, mt: 0.3 }}>
                        <CheckCircleOutlineIcon sx={{ fontSize: 15, color: "#7C3AED" }}/>
                      </ListItemIcon>
                      <ListItemText primary={item} primaryTypographyProps={{ fontSize: 13.5, color: "#555", lineHeight: 1.68 }}/>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box sx={{ background: "white", py: 6, borderTop: "1px solid #EBEBEB" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {[
              { to: "/procedure", label: "Brevets Acceptés →",  desc: "Consultez les brevets acceptés de Sonatrach" },
              { to: "/tarifs",    label: "Tarifs INAPI →",       desc: "Barème des taxes par type de déposant" },
            ].map(({ to, label, desc }) => (
              <Grid item xs={12} md={6} key={to}>
                <Paper variant="outlined" onClick={() => navigate(to)} sx={{
                  p: 3, borderRadius: "14px", borderColor: "#DEDEDE", cursor: "pointer",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  transition: "all .22s",
                  "&:hover": { borderColor: "#E8440A", background: "#FEF8F5", boxShadow: "0 6px 20px rgba(232,68,10,0.09)" },
                }}>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: 15.5, color: "#E8440A" }}>{label}</Typography>
                    <Typography sx={{ fontSize: 13, color: "#888" }}>{desc}</Typography>
                  </Box>
                  <ArrowForwardIcon sx={{ color: "#E8440A", fontSize: 20 }}/>
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