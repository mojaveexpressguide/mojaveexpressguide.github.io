---
sidebar_position: 12
---

# MEG - Patches & Tweaks

---

As you did with **Viva New Vegas** create new separators for the above categories.

### [NV Compatibility Skeleton](https://www.nexusmods.com/newvegas/mods/68776)

A skeleton with compatibility for the latest mods. This needs to be placed under all your other mods.

:::info On the left pane in MO2:

Drag **NV Compatibility Skeleton** installed previously from **Viva New Vegas** below the newly created separator. This mod should be as low as possible in your modlist.

:::


### Consistent Pip-Boy Icons v4

You will need to download the below now as it needs to be below all your other mods.

**Installation:**

**- Main Files - [3. CPI - Mod Patches](https://www.nexusmods.com/newvegas/mods/65046?tab=files)**

:::info In the installer:

**[Consistent Pip-Boy Icons - Mod Patches]**

- Keep the default boxes checked

**> Install**

:::

### MEG - Patches

This will contain all the patches you need for the Mojave Express Guide.

**Installation:**

- **Main Files - [MEG - Patches](https://www.nexusmods.com/newvegas/mods/80444?tab=files)**

:::info In the installer:

Pick the **patches** that are relevant to you. Read the requirements carefully.

**List of mods with patches included in the installer:**

- MEG - Iron Sights Aligned Patch

- Vanilla Enhancements

- Uncut Wasteland

- Character Expansions Revised

- FPGE Patches

- B42 Dropmag

- Sweet Pain NV Crashfix

- Famine Cyberware Patch - Credit to PlasticPotatoes on nexus

- RAD - Radiation (is) Actually Dangerous - Overhaul - with Injection Fix - Credit to Nechigawara on nexus

- S6S Perks PAHP Patch - Credit to Omnigma on nexus

- JSRS 2.0 FNV + Another Millenia Sound Patch - Credit to MesserAR on nexus

**>Install**

:::

<br />


### MEG - Tweaks

My custom set of tweaks that I use.

**Installation:**

- **Main Files - [MEG - Tweaks](https://www.nexusmods.com/newvegas/mods/80444?tab=files)**

:::info In the installer:

Pick the **tweaks** that you would like and make sure to read the description of them in the FOMOD:

**List of tweaks included in the installer:**

- MEG - JIP LN NVSE Config

- MEG - Stewie Tweaks Config

- ​MEG - Helmet Armor Rebalance (JIP)

- MEG - Vigor Carryweight Config

- MEG - JAM Config

- MEG - B42 True Leaning Config

- MEG - B42 Optics Config

- MEG - Bullet Trails Config

- MEG - Aim Down Sights Config

- MEG - Contextual HUD Config

**>Install**

:::


### MEG - Navmesh Compatibility Patch

This is a premade Navmesh Compatibility Patch for Mojave Express. This requires YUP, AWLOP, NVInteriors, New Vegas Landscape Overhaul Re-Remastered, The Living Desert, Uncut Wasteland, Vanilla Enhancements, New Vegas Killer, New Vegas Bounties, Lucky Jim's Cache, Mobile Crate Truck Remastered, Sweets Pain NV, Home and Safehouse Tweaks, Uncut Wasteland - NVInteriors Remastered Patch.

**Installation:**

- **Main Files - [MEG - Navmesh Compatibility Patch](https://www.nexusmods.com/newvegas/mods/80444?tab=files)**

:::tip Note:

If you download this then disable **VNV Extended Navmesh Patch** and **YUP Navmesh Overhaul Patch** if you have them from **VNV**.

If you do not have all of the selected mods or plan to add more please create your own navmesh compatibility patch using the guide on this page: **[Improved AI (Navmesh Overhaul Mod)](https://www.nexusmods.com/newvegas/mods/81003)**

:::

### MEG - LOD Generation

I highly recommend that you generate your own **Object LOD** at this point. You can do so by following this [LOD Guide](https://vivanewvegas.moddinglinked.com/lod.html).
  
If you have downloaded **Viva New Vegas** with **Wabbajack** you will already have the resources listed on that page and so all you need to do is disable the **FNVLODGen Output** mod that you have in **MO2**, then follow the linked [LOD Guide](https://vivanewvegas.moddinglinked.com/lod.html) from the FNVLODGen section onwards. When it comes to naming your LOD **Output** just call it **Custom FNVLODGen Output**.

:::tip Note: 

Alternatively you can download pregenerated LOD which I generated with all of the mods in VNV + MEG using the texture guide. You will still need to download and install the below mods in the order presented!

:::

**Installation:**

- **Main Files - [LOD Fixes and Improvements - NVSE](https://www.nexusmods.com/newvegas/mods/84171?tab=files)**

- **Main Files - [FNVLODGen Resources](https://www.nexusmods.com/newvegas/mods/58562?tab=files)**

- **Main Files - [Trees LOD Billboards Vanilla](https://www.nexusmods.com/newvegas/mods/58562?tab=files)**

- **Main Files - [LODadditions](https://www.nexusmods.com/newvegas/mods/61206?tab=files)**

- **Main Files - [LOD additions and improvements - YUP Patch](https://www.nexusmods.com/newvegas/mods/77945?tab=files)**

- **Main Files - [TCM's LOD Overhaul](https://www.nexusmods.com/newvegas/mods/70155?tab=files)**
 
- **Main Files - [More LODs Additions and fixes](https://www.nexusmods.com/newvegas/mods/81751?tab=files)**

- **Main Files - [Wasted LOD - Cliffs of Mojave](https://www.nexusmods.com/newvegas/mods/83316?tab=files)**

- **Optional Files - [MEG - FNVLODGen Output](https://www.nexusmods.com/newvegas/mods/80444?tab=files)**

<br />

```ini title="To increase LOD Draw Distance add these settings to your falloutcustom.ini:"

[TerrainManager]
; Increases the maximum distance of LOD  
fBlockLoadDistanceLow=100000  
fBlockLoadDistance=250000  

[SpeedTree]
; Makes flora use the full objects instead of LOD, this negates pop-in  
bForceFullLOD=1  

```

