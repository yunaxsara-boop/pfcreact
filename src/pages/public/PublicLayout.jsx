import { useNavigate, useLocation, Link as RouterLink } from "react-router-dom";
import {
  AppBar, Toolbar, Box, Typography, Button, Container,
  Stack, Divider, Grid, Breadcrumbs, Link,
} from "@mui/material";
import LockOpenRoundedIcon   from "@mui/icons-material/LockOpenRounded";
import HomeOutlinedIcon      from "@mui/icons-material/HomeOutlined";
import NavigateNextIcon      from "@mui/icons-material/NavigateNext";
import EmailOutlinedIcon     from "@mui/icons-material/EmailOutlined";

/* ── Logo géométrique Sonatrach ── */
export function SonatrachLogo({ light = false }) {
  return (
    <Stack direction="row" alignItems="center" spacing={1.5}
      component={RouterLink} to="/" sx={{ textDecoration: "none" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "2.5px", transform: "skewX(-6deg)" }}>
        <Box sx={{ width: 22, height: 5, borderRadius: "2px", background: "#E8440A" }}/>
        <Box sx={{ width: 16, height: 5, borderRadius: "2px", background: "#E8440A", opacity: 0.72 }}/>
        <Box sx={{ width: 10, height: 5, borderRadius: "2px", background: "#E8440A", opacity: 0.42 }}/>
      </Box>
      <Typography sx={{
        fontWeight: 900, fontSize: 16, letterSpacing: "1.8px",
        color: light ? "#fff" : "#111",
        fontFamily: "'Outfit',sans-serif", lineHeight: 1,
      }}>SONATRACH</Typography>
    </Stack>
  );
}

const NAV_LINKS = [
  { label: "Présentation",      to: "/presentation" },
  { label: "Brevets Acceptés",  to: "/procedure" },
  { label: "Dossier à préparer", to: "/dossier" },
  { label: "Tarifs INAPI",      to: "/tarifs" },
];

/* ── Navbar ── */
export function PublicNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <AppBar position="fixed" elevation={0} sx={{
      background: "rgba(255,255,255,0.93)", backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(0,0,0,0.07)",
    }}>
      <Toolbar sx={{ px: { xs: 2, md: 6 }, height: 66, justifyContent: "space-between" }}>
        <SonatrachLogo/>
        <Stack direction="row" spacing={0.5} sx={{ display: { xs: "none", md: "flex" } }}>
          {NAV_LINKS.map(({ label, to }) => (
            <Button key={to} component={RouterLink} to={to} size="small"
              sx={{
                color: location.pathname === to ? "#E8440A" : "#444",
                fontWeight: location.pathname === to ? 700 : 500,
                fontSize: 13.5, px: 1.8, borderRadius: "8px",
                background: location.pathname === to ? "#FEF0EB" : "transparent",
                "&:hover": { background: "#FEF0EB", color: "#E8440A" },
              }}
            >{label}</Button>
          ))}
        </Stack>
        <Button variant="contained" color="primary"
          startIcon={<LockOpenRoundedIcon sx={{ fontSize: 17 }}/>}
          onClick={() => navigate("/login")}
          sx={{
            px: 2.6, py: 0.9, fontSize: 13.5, fontWeight: 700, borderRadius: "999px",
            boxShadow: "0 4px 14px rgba(232,68,10,0.35)",
            "&:hover": { boxShadow: "0 6px 22px rgba(232,68,10,0.50)", transform: "translateY(-1px)" },
            transition: "all .2s",
          }}
        >Se connecter</Button>
      </Toolbar>
    </AppBar>
  );
}

/* ── Breadcrumb ── */
export function PublicBreadcrumb({ current }) {
  return (
    <Box sx={{ background: "#F7F7F7", borderBottom: "1px solid #EBEBEB", pt: "66px" }}>
      <Container maxWidth="lg">
        <Breadcrumbs separator={<NavigateNextIcon sx={{ fontSize: 14 }}/>}
          sx={{ py: 1.8, "& .MuiBreadcrumbs-separator": { color: "#AAA" } }}>
          <Link component={RouterLink} to="/" underline="hover"
            sx={{ display: "flex", alignItems: "center", gap: 0.6, fontSize: 13, color: "#666", fontWeight: 500 }}>
            <HomeOutlinedIcon sx={{ fontSize: 15 }}/> Accueil
          </Link>
          <Typography sx={{ fontSize: 13, color: "#E8440A", fontWeight: 700 }}>{current}</Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );
}

/* ── Footer ── */
export function PublicFooter() {
  return (
    <>
      <Box sx={{ background: "#0C0C0C", borderTop: "1px solid rgba(255,255,255,0.05)", py: 5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} mb={4}>
            <Grid item xs={12} md={4}>
              <SonatrachLogo light/>
              <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.28)", lineHeight: 1.85, mt: 2, maxWidth: 280 }}>
                Plateforme officielle de gestion des brevets — DC R&D Sonatrach
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1} mt={2}>
                <EmailOutlinedIcon sx={{ fontSize: 15, color: "#E8440A" }}/>
                <Typography component="a" href="mailto:demande.brevet@sonatrach.dz"
                  sx={{ fontSize: 12.5, color: "rgba(255,255,255,0.40)", textDecoration: "none", "&:hover": { color: "#E8440A" }, transition: "color .15s" }}>
                  demande.brevet@sonatrach.dz
                </Typography>
              </Stack>
            </Grid>
            {[
              { title: "Pages", links: [
                { label: "Présentation",       to: "/presentation", ext: false },
                { label: "Brevets Acceptés",   to: "/procedure",    ext: false },
                { label: "Dossier à préparer", to: "/dossier",      ext: false },
                { label: "Tarifs INAPI",       to: "/tarifs",       ext: false },
              ]},
              { title: "INAPI — Liens officiels", links: [
                { label: "e-Services INAPI",  to: "https://e-services.inapi.org",           ext: true },
                { label: "Barème des taxes",  to: "https://e-services.inapi.org/patentTaxes", ext: true },
              ]},
            ].map((col) => (
              <Grid item xs={6} md={3} key={col.title}>
                <Typography sx={{ fontSize: 10.5, fontWeight: 700, color: "rgba(255,255,255,0.28)", letterSpacing: "1.5px", textTransform: "uppercase", mb: 2.5 }}>
                  {col.title}
                </Typography>
                <Stack spacing={1.5}>
                  {col.links.map(({ label, to, ext }) => (
                    <Typography key={label}
                      component={ext ? "a" : RouterLink}
                      href={ext ? to : undefined}
                      to={ext ? undefined : to}
                      target={ext ? "_blank" : undefined}
                      rel={ext ? "noopener" : undefined}
                      sx={{ fontSize: 13, color: "rgba(255,255,255,0.35)", textDecoration: "none", "&:hover": { color: "#E8440A" }, transition: "color .15s" }}>
                      {label}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.06)", mb: 3 }}/>
          <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="center" spacing={1}>
            <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.20)" }}>
              © 2025 Sonatrach — Direction Centrale R&D. Tous droits réservés.
            </Typography>
            <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.15)" }}>
              Classement 0.003.5/20 · Référence E-063
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
}