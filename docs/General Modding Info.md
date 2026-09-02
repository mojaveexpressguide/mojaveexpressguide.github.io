# General Modding Info

---

**Mod Configuration Menu:**
Some mods may have a **Mod Configuration Menu**. When in game > enter the **Pause Menu** > select **Mod Configuration Menu** or press **'M'** if using **[MAPMO](https://www.nexusmods.com/newvegas/mods/74365)** to open up the **Mod Configuration Menu**.

**Stewie's Tweaks:**
When in game > enter the **Pause Menu** > go to **Settings** > **Tweaks**. There's a large selection of tweaks to pick from but you will need to restart your game for these to take effect.

**MO2 INI Files:**
Some mods may have configurable INI files. In **MO2** > double-click the mod you would like to configure > select the **INI Files** tab > select the INI file on the left you would like to configure. Also you can configure some stuff through the Text Files tab.

**kNVSE Animations:**

You can install as many **kNVSE** animations as you want. However .json files are prioritised alphabetically (Z will override A). Therefore if you have 2 mods that edit the animation of the same weapon you will need to hide/rename the files you want in order to get the animations to appear correctly. My suggestion would be to use Iron Sights Aligned which lets you configure your animation preferences easily in the FOMOD.

**JIP LN NVSE scriptrunners:**

These are also loaded alphabetically (Z will override A).

**Converting .esp's to .esm's**

You need to open xEdit and load the plugin. Click on the plugins **File Header** > in the **Record Flags** box > Select **☐ESM**. 

Certain records will need to be marked as persistent in order to function properly. To do this you will need to click on the record > in the **Record Flags** box > Select **☐Quest item / Persistent reference**. For info on what records should be flagged as persistent, go to **[GECK WIKI](https://geckwiki.com/index.php?title=Reference)** and look under the **Reference Data Flags** header.

Alternatively you can also just flag everything as persistent (Less Ideal).