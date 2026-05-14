import { useNavigate } from "react-router-dom";
import {
  Box, Typography, Button, Container, Grid, Paper,
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Stack, Chip, Avatar, Divider,
  ThemeProvider, CssBaseline, alpha,
} from "@mui/material";
import OpenInNewIcon            from "@mui/icons-material/OpenInNew";
import ArrowForwardIcon         from "@mui/icons-material/ArrowForward";
import ReceiptLongOutlinedIcon  from "@mui/icons-material/ReceiptLongOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PhoneOutlinedIcon        from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon        from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon   from "@mui/icons-material/LocationOnOutlined";
import LanguageOutlinedIcon     from "@mui/icons-material/LanguageOutlined";
import PaymentsOutlinedIcon     from "@mui/icons-material/PaymentsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import InfoOutlinedIcon         from "@mui/icons-material/InfoOutlined";
import LinkOutlinedIcon         from "@mui/icons-material/LinkOutlined";
import DownloadOutlinedIcon     from "@mui/icons-material/DownloadOutlined";

import { lightTheme } from "../Home";
import { PublicNavbar, PublicBreadcrumb, PublicFooter } from "./PublicLayout";

/* ── Data ── */
const TARIFS_DEMANDE = [
  { code:"762-01", libelle:"Taxe de dépôt et de première annuité",   entreprise:"15 000", universite:"7 000", particulier:"6 500" },
  { code:"762-02", libelle:"Taxe de dépôt de certificat d'addition", entreprise:"15 000", universite:"6 500", particulier:"5 000" },
  { code:"762-03", libelle:"Taxe de revendication de priorité",        entreprise:"10 000", universite:"5 000", particulier:"2 000" },
  { code:"762-04", libelle:"Taxe de publication de brevet d'invention",entreprise:"10 000", universite:"5 000", particulier:"3 000" },
];

const TARIFS_SUPP = [
  { code:"762-21", libelle:"Publication : par tranche de 5 pages supplémentaires au-delà des 10 premières", entreprise:"5 000", universite:"2 000", particulier:"1 200" },
];

const LIENS = [
  { icon:<LanguageOutlinedIcon/>,    color:"#E8440A", label:"Portail e-services INAPI",     url:"https://e-services.inapi.org",      desc:"Dépôt en ligne, suivi des demandes, espace personnel." },
  { icon:<PaymentsOutlinedIcon/>,    color:"#059669", label:"Barème des taxes (officiel)",   url:"https://e-services.inapi.org/patentTaxes", desc:"Page officielle des tarifs de brevets INAPI." },
  { icon:<DownloadOutlinedIcon/>,    color:"#2563EB", label:"Formulaire Brevet (PDF)",       url:"http://e-services.inapi.org/SITE/FICHIERS/Requete_de_delivrance.pdf", desc:"Requête de délivrance — Formulaire R2-FO-03 E1." },
  { icon:<DownloadOutlinedIcon/>,    color:"#7C3AED", label:"Formulaire Dessins (PDF)",      url:"http://e-services.inapi.org/SITE/FICHIERS/Declaration_de_depot_de_dessins_ou_de_modeles.pdf", desc:"Déclaration de dépôt — Formulaire R1-FO-02 E1." },
  { icon:<LinkOutlinedIcon/>,        color:"#D97706", label:"Guide de rédaction",            url:"https://drive.google.com/drive/folders/1SiAOm1sL1JEmJC5oZOa11A1i1-uW7Fvu", desc:"Guide officiel pour rédiger les mémoires descriptifs." },
  { icon:<LanguageOutlinedIcon/>,    color:"#0891B2", label:"Site officiel INAPI",           url:"https://www.inapi.org",             desc:"Institut National Algérien de la Propriété Industrielle." },
];

/* ── Shared table header ── */
function TarifsTable({ rows }) {
  return (
    <TableContainer component={Paper} variant="outlined"
      sx={{ borderRadius:"16px", borderColor:"#E8E8E8", overflow:"hidden" }}>
      <Table>
        <TableHead>
          <TableRow sx={{ background:"#F7F7F7" }}>
            <TableCell sx={{ fontWeight:700, fontSize:11.5, letterSpacing:".5px", textTransform:"uppercase", color:"#666", width:90 }}>Code</TableCell>
            <TableCell sx={{ fontWeight:700, fontSize:11.5, letterSpacing:".5px", textTransform:"uppercase", color:"#666" }}>Libellé</TableCell>
            <TableCell align="right" sx={{ fontWeight:700, fontSize:11.5, letterSpacing:".5px", textTransform:"uppercase", color:"#E8440A", whiteSpace:"nowrap" }}>Entreprise</TableCell>
            <TableCell align="right" sx={{ fontWeight:700, fontSize:11.5, letterSpacing:".5px", textTransform:"uppercase", color:"#2563EB", whiteSpace:"nowrap" }}>Univ. / R&D</TableCell>
            <TableCell align="right" sx={{ fontWeight:700, fontSize:11.5, letterSpacing:".5px", textTransform:"uppercase", color:"#059669", whiteSpace:"nowrap" }}>Particulier / Start-up</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(t => (
            <TableRow key={t.code} sx={{ "&:hover":{ background:"#FEF8F5" }, borderBottom:"1px solid #F0F0F0" }}>
              <TableCell><Chip label={t.code} size="small" sx={{ fontFamily:"monospace", fontWeight:700, fontSize:10.5, background:"#F4F4F4", color:"#555", borderRadius:"6px" }}/></TableCell>
              <TableCell sx={{ color:"#333", fontWeight:500, lineHeight:1.5, py:2, fontSize:13.5 }}>{t.libelle}</TableCell>
              <TableCell align="right"><Typography sx={{ fontWeight:800, fontSize:13.5, color:"#E8440A" }}>{t.entreprise} DA</Typography></TableCell>
              <TableCell align="right"><Typography sx={{ fontWeight:800, fontSize:13.5, color:"#2563EB" }}>{t.universite} DA</Typography></TableCell>
              <TableCell align="right"><Typography sx={{ fontWeight:800, fontSize:13.5, color:"#059669" }}>{t.particulier} DA</Typography></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

/* ── Component ── */
export default function Tarifs() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');`}</style>

      <PublicNavbar/>
      <PublicBreadcrumb current="Tarifs INAPI"/>

      {/* ── Hero mini ── */}
      <Box sx={{ background:"linear-gradient(135deg,#0C0C0C 0%,#001A0A 60%,#0C0C0C 100%)", py:{ xs:6, md:9 }, position:"relative", overflow:"hidden" }}>
        <Box sx={{ position:"absolute", top:"-15%", right:"-5%", width:360, height:360, borderRadius:"50%", background:"radial-gradient(circle,rgba(5,150,105,0.65) 0%,transparent 65%)", filter:"blur(50px)", pointerEvents:"none" }}/>
        <Box sx={{ position:"absolute", top:"30%", right:"12%", width:220, height:220, borderRadius:"50%", background:"radial-gradient(circle,rgba(232,68,10,0.30) 0%,transparent 70%)", filter:"blur(30px)", pointerEvents:"none" }}/>
        <Container maxWidth="lg" sx={{ position:"relative", zIndex:1 }}>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography sx={{ fontSize:11, fontWeight:700, color:"#34D399", letterSpacing:"2px", textTransform:"uppercase", mb:1.5 }}>
                Taxes officielle INAPI — 2024
              </Typography>
              <Typography variant="h1" sx={{ fontSize:{ xs:28, md:46 }, fontWeight:900, color:"white", letterSpacing:"-2px", lineHeight:1.08, mb:2 }}>
                Barème des taxes
                <Box component="span" sx={{ background:"linear-gradient(90deg,#34D399,#6EE7B7)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  {" "}Brevets &amp; Certificats
                </Box>
              </Typography>
              <Typography sx={{ fontSize:15, color:"rgba(255,255,255,0.50)", lineHeight:1.80, maxWidth:520, mb:4 }}>
                Taxes applicables aux demandes de brevets d'invention et certificats d'addition,
                différenciées selon le type de déposant.
              </Typography>
              <Paper sx={{ p:2.5, background:"rgba(5,150,105,0.12)", border:"1px solid rgba(52,211,153,0.25)", borderRadius:"12px", maxWidth:480 }}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <InfoOutlinedIcon sx={{ color:"#34D399", fontSize:18, mt:.15, flexShrink:0 }}/>
                  <Typography sx={{ fontSize:13.5, color:"rgba(255,255,255,0.70)", lineHeight:1.72 }}>
                    Ces taxes sont acquittées par la <strong style={{ color:"white" }}>DC R&D de SONATRACH</strong> au nom
                    de l'entreprise dans le mois suivant le dépôt.
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={12} md={5}>
              {/* Résumé rapide */}
              <Stack spacing={2}>
                {[
                  { icon:<ReceiptLongOutlinedIcon/>,     label:"Taxe de dépôt (Entreprise)",      value:"15 000 DA", color:"#E8440A" },
                  { icon:<CalendarMonthOutlinedIcon/>,   label:"Délai paiement 1ère annuité",     value:"1 mois",    color:"#F59E0B" },
                  { icon:<AccountBalanceOutlinedIcon/>,  label:"Recherche d'antériorité",         value:"2 400 DA",  color:"#34D399" },
                  { icon:<CalendarMonthOutlinedIcon/>,   label:"Durée de protection brevet",      value:"20 ans",    color:"#818CF8" },
                ].map(({ icon, label, value, color }) => (
                  <Paper key={label} sx={{ p:2.2, borderRadius:"12px", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.10)", backdropFilter:"blur(8px)" }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Stack direction="row" spacing={1.2} alignItems="center">
                        <Box sx={{ color, "& svg":{ fontSize:18 } }}>{icon}</Box>
                        <Typography sx={{ fontSize:13.5, color:"rgba(255,255,255,0.60)", fontWeight:500 }}>{label}</Typography>
                      </Stack>
                      <Typography sx={{ fontSize:15, fontWeight:800, color }}>{value}</Typography>
                    </Stack>
                  </Paper>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Tables des tarifs ── */}
      <Box sx={{ background:"#F2F2F2", py:9 }}>
        <Container maxWidth="lg">

          {/* Taxes demandes */}
          <Typography sx={{ fontSize:11, fontWeight:700, color:"#E8440A", letterSpacing:"2px", textTransform:"uppercase", mb:1 }}>
            Codes 762-01 à 762-04
          </Typography>
          <Typography variant="h2" sx={{ fontSize:{ xs:22, md:30 }, letterSpacing:"-1px", color:"#111", mb:3 }}>
            Taxes pour demandes de brevets et certificats d'addition
          </Typography>
          <TarifsTable rows={TARIFS_DEMANDE}/>

          {/* Légende */}
          <Stack direction="row" spacing={3} mt={2} mb={6} flexWrap="wrap" useFlexGap>
            {[["#E8440A","Entreprises"],["#2563EB","Universités & Centres de recherche"],["#059669","Particuliers, Start-ups & Incubateurs"]].map(([c,l])=>(
              <Stack key={l} direction="row" alignItems="center" spacing={.7}>
                <Box sx={{ width:10, height:10, borderRadius:"50%", background:c }}/>
                <Typography sx={{ fontSize:12, color:"#888" }}>{l}</Typography>
              </Stack>
            ))}
          </Stack>

          {/* Taxes supplémentaires */}
          <Typography sx={{ fontSize:11, fontWeight:700, color:"#7C3AED", letterSpacing:"2px", textTransform:"uppercase", mb:1 }}>
            Code 762-21 — Taxes supplémentaires
          </Typography>
          <Typography variant="h2" sx={{ fontSize:{ xs:20, md:26 }, letterSpacing:"-1px", color:"#111", mb:3 }}>
            Publication — pages supplémentaires
          </Typography>
          <TarifsTable rows={TARIFS_SUPP}/>
          <Typography sx={{ fontSize:12.5, color:"#AAA", mt:1.5 }}>
            * Au-delà des 10 premières pages, par tranche de 5 pages supplémentaires.
          </Typography>

        </Container>
      </Box>

      {/* ── Informations paiement ── */}
      <Box sx={{ background:"white", py:9, borderTop:"1px solid #EBEBEB" }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize:11, fontWeight:700, color:"#E8440A", letterSpacing:"2px", textTransform:"uppercase", mb:1 }}>
            Paiement
          </Typography>
          <Typography variant="h2" sx={{ fontSize:{ xs:22, md:30 }, letterSpacing:"-1px", color:"#111", mb:5 }}>
            Modalités de paiement des taxes
          </Typography>
          <Grid container spacing={3}>
            {[
              { icon:<AccountBalanceOutlinedIcon/>, color:"#E8440A", bg:"#FEF0EB",
                title:"Virement bancaire CNEP",
                lines:["Compte INAPI : 100 00 13733 clé 7","Agence de domiciliation : ESSAFIR ALITTI CNEP","Code agence : 103"] },
              { icon:<AccountBalanceOutlinedIcon/>, color:"#2563EB", bg:"#EFF6FF",
                title:"Virement BEA",
                lines:["BEA — Avenue Amirouche, Alger","Compte n° 002000121203264180 71","Sur présentation du formulaire de dépôt"] },
              { icon:<PaymentsOutlinedIcon/>,       color:"#059669", bg:"#ECFDF5",
                title:"Chèque ou caisse INAPI",
                lines:["Directement à la caisse de l'INAPI","42, rue Larbi Ben M'Hidi, Alger","Sur présentation du dossier de dépôt"] },
            ].map(({ icon, color, bg, title, lines }) => (
              <Grid item xs={12} md={4} key={title}>
                <Paper variant="outlined" sx={{ p:3, borderRadius:"16px", borderColor:"#E8E8E8", height:"100%",
                  transition:"all .22s", "&:hover":{ borderColor:color, boxShadow:`0 8px 24px ${alpha(color,0.12)}`, transform:"translateY(-3px)" } }}>
                  <Avatar sx={{ background:bg, color, width:44, height:44, mb:2 }}>{icon}</Avatar>
                  <Typography sx={{ fontWeight:700, fontSize:15, color:"#111", mb:1.5 }}>{title}</Typography>
                  {lines.map((l,i) => (
                    <Typography key={i} sx={{ fontSize:13.5, color:"#666", lineHeight:1.72 }}>{l}</Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Délais */}
          <Paper sx={{ mt:4, p:3, borderRadius:"16px", background:"#FEF0EB", border:"1px solid rgba(232,68,10,0.18)" }}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <InfoOutlinedIcon sx={{ color:"#E8440A", fontSize:22, mt:.2, flexShrink:0 }}/>
              <Box>
                <Typography sx={{ fontWeight:700, fontSize:15, color:"#111", mb:.8 }}>Délais importants</Typography>
                <Stack spacing={.8}>
                  {[
                    "1ère annuité : dans le mois suivant le dépôt (délai INAPI : 1 mois calendaire).",
                    "2ème annuité : réclamée par la DC R&D 1 mois avant l'expiration des 365 jours du dépôt.",
                    "Annuités suivantes : payées chaque année pour maintenir le brevet en vigueur pendant 20 ans.",
                    "Taxe de priorité : à régler en même temps que le dépôt si priorité revendiquée.",
                  ].map((t, i) => (
                    <Typography key={i} sx={{ fontSize:13.5, color:"#7A2600", lineHeight:1.72 }}>• {t}</Typography>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Paper>
        </Container>
      </Box>

      {/* ── Coordonnées INAPI + Liens ── */}
      <Box sx={{ background:"#F2F2F2", py:9, borderTop:"1px solid #EBEBEB" }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            {/* Coordonnées */}
            <Grid item xs={12} md={4}>
              <Typography sx={{ fontSize:11, fontWeight:700, color:"#E8440A", letterSpacing:"2px", textTransform:"uppercase", mb:1.5 }}>
                Contact
              </Typography>
              <Typography variant="h2" sx={{ fontSize:{ xs:20, md:26 }, letterSpacing:"-1px", color:"#111", mb:3 }}>
                Coordonnées INAPI
              </Typography>
              <Stack spacing={2}>
                {[
                  { icon:<LocationOnOutlinedIcon/>, text:"42, rue Larbi Ben M'Hidi, 3ème étage, B.P. 403 Alger Gare" },
                  { icon:<PhoneOutlinedIcon/>,       text:"Tél : (021) 73 57 74 · Fax : (021) 73 96 44 et (021) 73 55 81" },
                  { icon:<EmailOutlinedIcon/>,        text:"brevet@inapi.dz · info@inapi.dz" },
                  { icon:<LanguageOutlinedIcon/>,    text:"www.inapi.dz · e-services.inapi.org" },
                ].map(({ icon, text }) => (
                  <Stack key={text} direction="row" spacing={1.5} alignItems="flex-start">
                    <Box sx={{ color:"#E8440A", mt:.2, "& svg":{ fontSize:18 } }}>{icon}</Box>
                    <Typography sx={{ fontSize:13.5, color:"#555", lineHeight:1.72 }}>{text}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            {/* Liens utiles */}
            <Grid item xs={12} md={8}>
              <Typography sx={{ fontSize:11, fontWeight:700, color:"#E8440A", letterSpacing:"2px", textTransform:"uppercase", mb:1.5 }}>
                Liens directs
              </Typography>
              <Typography variant="h2" sx={{ fontSize:{ xs:20, md:26 }, letterSpacing:"-1px", color:"#111", mb:3 }}>
                Accéder aux services INAPI
              </Typography>
              <Grid container spacing={2}>
                {LIENS.map(({ icon, color, label, url, desc }) => (
                  <Grid item xs={12} sm={6} key={label}>
                    <Paper component="a" href={url} target="_blank" rel="noopener"
                      sx={{ display:"block", p:2.5, borderRadius:"14px", border:"1px solid #E5E5E5",
                        textDecoration:"none", transition:"all .22s",
                        "&:hover":{ borderColor:color, boxShadow:`0 8px 24px ${alpha(color,0.12)}`, transform:"translateY(-3px)" } }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={.8}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Box sx={{ color, "& svg":{ fontSize:17 } }}>{icon}</Box>
                          <Typography sx={{ fontWeight:700, fontSize:13.5, color:"#111" }}>{label}</Typography>
                        </Stack>
                        <OpenInNewIcon sx={{ fontSize:14, color, flexShrink:0 }}/>
                      </Stack>
                      <Typography sx={{ fontSize:12, color:"#999", lineHeight:1.60 }}>{desc}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box sx={{ background:"white", py:6, borderTop:"1px solid #EBEBEB" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {[
              { to:"/procedure", label:"Procédure interne →", desc:"Les 8 étapes DC R&D → CST → INAPI" },
              { to:"/dossier",   label:"Dossier à préparer →", desc:"Pièces à fournir pour brevet et dessins" },
            ].map(({ to, label, desc }) => (
              <Grid item xs={12} md={6} key={to}>
                <Paper variant="outlined" onClick={() => navigate(to)} sx={{
                  p:3, borderRadius:"14px", borderColor:"#DEDEDE", cursor:"pointer",
                  display:"flex", justifyContent:"space-between", alignItems:"center",
                  transition:"all .22s", "&:hover":{ borderColor:"#E8440A", background:"#FEF8F5", boxShadow:"0 6px 20px rgba(232,68,10,0.09)" },
                }}>
                  <Box>
                    <Typography sx={{ fontWeight:700, fontSize:15.5, color:"#E8440A" }}>{label}</Typography>
                    <Typography sx={{ fontSize:13, color:"#888" }}>{desc}</Typography>
                  </Box>
                  <ArrowForwardIcon sx={{ color:"#E8440A", fontSize:20 }}/>
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