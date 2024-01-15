# METG - Patches & Tweaks

---

### METG - Patches

This will contain various patches for the textures in this guide.

**Installation:**

- **Optional Files - [METG - Patches](https://www.nexusmods.com/newvegas/mods/80444?tab=files)**

:::info In the installer:

Pick the **patches** that are relevant to you. Read the requirements carefully.

<details>
<summary> List of mods with patches included in the installer: </summary>

- SSTRemasteredQuarries (ESMified)

- SSTRemasteredQuarries - NVLORR Patch

- Classic Fallout Metal Armor Icon Fix

- Classic Combat Armor Replacer - Vigor Patch

- Classic Combat Armor Replacer Mk2 - Vigor Patch

- Grenade Launcher Redux Scriptrunner

- Holorifle Redux Scriptrunner

- WAP 12.7 SMG Scriptrunner

- Laser Rifle Rebirth Scriptrunner

- MEG - Iron Sight Alignment WAP Patch

**>Install**

</details>

:::


### WAP B42 Optics Patch

Use this patch if you downloaded the WAP retextures and have B42 Optics.

**Installation:**

- **Main Files - [WAP B42 Optics Patch](https://www.nexusmods.com/newvegas/mods/81731?tab=files)**


### METG - LOD Generation

I highly recommend that you generate your own **Object & Terrain LOD** at this point. You can do so by following this [LOD Guide](https://vivanewvegas.moddinglinked.com/lod.html). Ensure that you do not install **Wasted LOD - Cliffs of Mojave** if you would like to have custom rock textures.  
  
If you have downloaded **Viva New Vegas** with **Wabbajack** you will already have the resources listed on that page and so all you need to do is disable the **FNVLODGen Output** mod and the **Wasted LOD - Cliffs of Mojave** mod that you have in **MO2**, then follow the linked [LOD Guide](https://vivanewvegas.moddinglinked.com/lod.html) from the FNVLODGen section onwards. When it comes to naming your LOD **Output** just call it **Custom Texture Guide FNVLODGen Output**.

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

- **Optional Files - [LODIFY FNV Wall_SoGB Editon](https://www.nexusmods.com/newvegas/mods/84165?tab=files)**

- **Optional Files - [METG - FNVLODGen Output](https://www.nexusmods.com/newvegas/mods/80444?tab=files)**

<br />

:::info Double-click Lod Additions and Improvements in MO2:

Select the **Filetree** tab and find the file `meshes\dlcanch\architecture\tents\dlcanchtentcornerchb.nif` then right click and **Rename** to `dlcanchtentcornerchb_lod.nif`.

```
  📁meshes 
   └📁dlcanch 
     └📁architecture
        └📁tents 
          └📁dlcanchtentcornerchb.nif   ⟵ right click and Rename to "dlcanchtentcornerchb_lod.nif"
```

:::


:::info Important:

You will also need to move **Aqua Performa - Strip Performance Fix** below the **METG - FNVLODGen Output** above.

```ini title="To increase LOD Draw Distance add these settings to your falloutcustom.ini:"
[TerrainManager]
; Increases the maximum distance of LOD  
fBlockLoadDistanceLow=100000  
fBlockLoadDistance=250000  

[SpeedTree]
; Makes flora use the full objects instead of LOD, this negates pop-in  
bForceFullLOD=1  
```