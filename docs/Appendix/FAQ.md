---
sidebar_position: 2
---

# Frequently Asked Questions

#### These are some of the most common questions I see asked.

---

### Why are there barely any texture mods?

The problem is that there is not a large texture pack that covers everything in the game and fits everyones taste, you will need to download multiple texture mods which may clash in style and not fit the vanilla games aesthetics. If you want a texture guide follow [Salamand3r's texture guide](https://salamand3r.fail/texture-guide)


### Is there a Wabbajack version avaliable?

Currently there is not a Wabbajack version and there are no plans to make one. I am only one man so maintaining both and producing mods at the same time isn't viable.


### How do I change my HUD colour?

If you have installed MAPMO, in the pause menu press "N" and you can change it in there.


### Can I install additional mods?

If you know what you are doing then yes. You will need to be wary of mods that are old; outdated, broken, know how to manually sort your loadorder, do conflict resolution with FNVEdit and possibly create patches for the mods you have added.


### Can I install additional animations?

You can install as many knvse animations as you want. However .json files are prioritised alphabetically (Z will override A). Therefore if you have 2 mods that edit the animation of the same weapon you will need to hide/rename the files you want in order to get the animations to appear correctly. Alernatively you can use **[Iron Sights Aligned](https://www.nexusmods.com/newvegas/mods/81933)** where you can change stuff in the FOMOD.


### Can I install an enb?

I would not recommend enb's as they can cause large performance drops and have obvious visual/artifacting issues. I suggest either using Reshade and/or New Vegas Reloaded. See DarkPopulous's video [here](https://www.youtube.com/watch?v=AXOWgD62ZJI) for why enb's kinda suck for FNV.


### Can I install Reshade?

Yes, firstly download a Reshade preset and place the ini file in your FNV root folder. I personally recommend [Vibrance](https://www.nexusmods.com/newvegas/mods/76715) or [Aura](https://www.nexusmods.com/newvegas/mods/79839).

Download "Reshade 5.9.0 with full add-on support" from here.

:::info In the installer:

- Keep the default boxes checked

**> Next**

- Select **DirectX 9**. Unless you have DXVK then select **Vulkan**.

**> Next**

- Click browse and select your reshade preset file ini that you placed in your FNV root folder.

**> Finish**

:::


You can press the **Home** key in game to change your reshade.

### Can I Install mods mid-game that affect the world or cells?

Not advised since the player's save file is essentially an ESP that is loaded last, and baked information can override and break any changes new mods introduce, causing bugs and crashes.


### Can I remove mods mid-game?

If the mod does not contain an .esp/esm plugin then it is generally fine to remove mid game. Mods that contain only textures & meshes, knvse files, xnvse plugins should be ok. If the mod has a plugin then:
​
This is not an intended scenario and will almost always result in all kinds of weird issues. There are cases where the changes or additions in a plugin are safe to disable, but that would require knowing everything the plugin does and how that affects the game. Better to avoid at all times unless you know what you are doing or if you are debugging something.


### Why do I get yellow dots on my screen when I get shot?

I'm not entirely sure but UI mods seem to exacerbate this issue. However installing a screen blood replacer can fix this issue. I recommend [FO4 Enhanced Blood Textures For FNV](https://www.nexusmods.com/newvegas/mods/74067?tab=description).


### Why do I crash around black mountain?

Seems to be an issue with Havok. Try capping your fps to 60 in this area.


### Why do I crash in dead money?

Pretty much the same situation as the above, seems to be an issue with Havok. Try capping your fps to 60 in this area.