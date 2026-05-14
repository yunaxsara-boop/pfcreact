import { useEffect, useState, useMemo } from "react";
import {
  Box, Typography, Container, Grid, Paper,
  Stack, Avatar, Chip, TextField, InputAdornment,
  ThemeProvider, CssBaseline, alpha, Divider,
} from "@mui/material";
import SearchIcon                from "@mui/icons-material/Search";
import VerifiedIcon              from "@mui/icons-material/Verified";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonOutlinedIcon        from "@mui/icons-material/PersonOutlined";
import BusinessOutlinedIcon      from "@mui/icons-material/BusinessOutlined";
import ArticleOutlinedIcon       from "@mui/icons-material/ArticleOutlined";
import NumbersOutlinedIcon       from "@mui/icons-material/NumbersOutlined";

import { lightTheme } from "../Home";
import { PublicNavbar, PublicBreadcrumb, PublicFooter } from "./PublicLayout";
import { getBrevets } from "../../features/brevets/brevetStorage";

/* ── Helpers ── */
function fmt(val) { return val || "—"; }

/* ── Carte individuelle ── */
function BrevetCard({ b }) {
  return (
    <Paper sx={{
      borderRadius: "18px",
      border: "1.5px solid #E8E8E8",
      overflow: "hidden",
      transition: "all .25s",
      "&:hover": {
        borderColor: "#E8440A",
        boxShadow: `0 12px 36px ${alpha("#E8440A", 0.12)}`,
        transform: "translateY(-4px)",
      },
    }}>
      {/* Bandeau supérieur */}
      <Box sx={{
        background: "linear-gradient(135deg,#E8440A,#C2410C)",
        px: 3, py: 2,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Avatar sx={{ background: "rgba(255,255,255,0.18)", color: "white", width: 36, height: 36 }}>
            <ArticleOutlinedIcon sx={{ fontSize: 18 }}/>
          </Avatar>
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: 13.5, color: "white", lineHeight: 1.2 }}>
              {fmt(b.titre)}
            </Typography>
            <Typography sx={{ fontSize: 11, color: "rgba(255,255,255,0.65)" }}>
              N° {fmt(b.num_brevet)}
            </Typography>
          </Box>
        </Stack>
        <Chip
          label="Accepté"
          icon={<VerifiedIcon sx={{ fontSize: "14px !important", color: "#16A34A !important" }}/>}
          size="small"
          sx={{
            background: "#DCFCE7",
            color: "#15803D",
            fontWeight: 700,
            fontSize: 11,
            border: "1px solid #BBF7D0",
          }}
        />
      </Box>

      {/* Corps */}
      <Box sx={{ p: 2.5 }}>
        <Grid container spacing={1.5}>
          {[
            { icon: <NumbersOutlinedIcon sx={{ fontSize: 14 }}/>, label: "N° Dépôt",    val: b.num_depo },
            { icon: <CalendarTodayOutlinedIcon sx={{ fontSize: 14 }}/>, label: "Date dépôt",  val: b.date_depo },
            { icon: <CalendarTodayOutlinedIcon sx={{ fontSize: 14 }}/>, label: "Date sortie", val: b.date_sortie },
            { icon: <BusinessOutlinedIcon sx={{ fontSize: 14 }}/>, label: "Titulaire",   val: b.titulaire },
            { icon: <PersonOutlinedIcon sx={{ fontSize: 14 }}/>, label: "Inventeur",   val: b.nom_inventeur },
            { icon: <PersonOutlinedIcon sx={{ fontSize: 14 }}/>, label: "Déposant",    val: b.nom_deposant },
          ].map(({ icon, label, val }) => (
            <Grid item xs={12} sm={6} key={label}>
              <Box sx={{
                display: "flex", alignItems: "flex-start", gap: 1,
                background: "#F7F7F7", borderRadius: "8px", px: 1.5, py: 1,
              }}>
                <Box sx={{ color: "#E8440A", mt: 0.15, flexShrink: 0 }}>{icon}</Box>
                <Box>
                  <Typography sx={{ fontSize: 10.5, color: "#AAA", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    {label}
                  </Typography>
                  <Typography sx={{ fontSize: 12.5, color: "#333", fontWeight: 600, lineHeight: 1.3 }}>
                    {fmt(val)}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
}

/* ── Page principale ── */
export default function Procedure() {
  const [all, setAll]       = useState([]);
  const [query, setQuery]   = useState("");

  useEffect(() => {
    const data = getBrevets().filter((b) => b.status === "ACCEPTER");
    setAll(data);
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return all;
    return all.filter((b) =>
      [b.titre, b.num_brevet, b.num_depo, b.titulaire, b.nom_inventeur, b.nom_deposant]
        .some((v) => v && v.toLowerCase().includes(q))
    );
  }, [all, query]);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');`}</style>

      <PublicNavbar/>
      <PublicBreadcrumb current="Brevets Acceptés"/>

      {/* ── Hero ── */}
      <Box sx={{
        background: "linear-gradient(135deg,#0C0C0C 0%,#1A0800 60%,#0C0C0C 100%)",
        py: { xs: 7, md: 10 }, position: "relative", overflow: "hidden",
      }}>
        <Box sx={{
          position: "absolute", top: "-10%", right: "-5%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle,rgba(232,68,10,0.70) 0%,transparent 65%)",
          filter: "blur(50px)", pointerEvents: "none",
        }}/>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#F97316", letterSpacing: "2px", textTransform: "uppercase", mb: 1.5 }}>
            Registre officiel · DC R&D Sonatrach
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 30, md: 48 }, fontWeight: 900, color: "white", letterSpacing: "-2px", lineHeight: 1.08, mb: 2 }}>
            Brevets Acceptés de{" "}
            <Box component="span" sx={{ background: "linear-gradient(90deg,#F97316,#FBBF24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Sonatrach
            </Box>
          </Typography>
          <Typography sx={{ fontSize: 15.5, color: "rgba(255,255,255,0.52)", lineHeight: 1.82, mb: 4, maxWidth: 520 }}>
            Consultez l'ensemble des brevets d'invention délivrés et acceptés au nom de Sonatrach
            par l'INAPI. Registre géré par la Direction Centrale R&D.
          </Typography>

          {/* Compteur */}
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Paper sx={{ px: 2.5, py: 1.5, borderRadius: "12px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", backdropFilter: "blur(8px)" }}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <VerifiedIcon sx={{ color: "#4ADE80", fontSize: 20 }}/>
                <Box>
                  <Typography sx={{ fontSize: 22, fontWeight: 900, color: "white", lineHeight: 1 }}>{all.length}</Typography>
                  <Typography sx={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>brevets acceptés</Typography>
                </Box>
              </Stack>
            </Paper>
          </Stack>
        </Container>
      </Box>

      {/* ── Recherche + Résultats ── */}
      <Box sx={{ background: "#F2F2F2", py: 8 }}>
        <Container maxWidth="lg">

          {/* Barre de recherche */}
          <Box sx={{ mb: 5 }}>
            <TextField
              fullWidth
              placeholder="Rechercher par titre, numéro de brevet, inventeur, titulaire…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#E8440A", fontSize: 22 }}/>
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: "14px",
                  background: "white",
                  fontSize: 14.5,
                  "& fieldset": { borderColor: "#E0E0E0" },
                  "&:hover fieldset": { borderColor: "#E8440A !important" },
                  "&.Mui-focused fieldset": { borderColor: "#E8440A !important" },
                },
              }}
            />
            {query && (
              <Typography sx={{ mt: 1.5, fontSize: 13, color: "#888" }}>
                {filtered.length} résultat{filtered.length !== 1 ? "s" : ""} pour «&nbsp;{query}&nbsp;»
              </Typography>
            )}
          </Box>

          {/* Grille de résultats */}
          {filtered.length === 0 ? (
            <Paper sx={{ p: 6, borderRadius: "18px", border: "1.5px dashed #E0E0E0", textAlign: "center" }}>
              <VerifiedIcon sx={{ fontSize: 48, color: "#E0E0E0", mb: 2 }}/>
              <Typography sx={{ fontSize: 16, fontWeight: 700, color: "#AAA", mb: 1 }}>
                {query ? "Aucun brevet trouvé" : "Aucun brevet accepté pour l'instant"}
              </Typography>
              <Typography sx={{ fontSize: 13.5, color: "#CCC" }}>
                {query ? "Essayez un autre terme de recherche." : "Les brevets acceptés apparaîtront ici."}
              </Typography>
            </Paper>
          ) : (
            <Grid container spacing={3}>
              {filtered.map((b) => (
                <Grid item xs={12} md={6} lg={4} key={b.id}>
                  <BrevetCard b={b}/>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>

      <PublicFooter/>
    </ThemeProvider>
  );
}