{
  description = "My Android app";

  inputs = {
    android-nixpkgs = {
      url = "github:tadfisher/android-nixpkgs";

      # The main branch follows the "canary" channel of the Android SDK
      # repository. Use another android-nixpkgs branch to explicitly
      # track an SDK release channel.
      #
      # url = "github:tadfisher/android-nixpkgs/stable";
      # url = "github:tadfisher/android-nixpkgs/beta";
      # url = "github:tadfisher/android-nixpkgs/preview";
      # url = "github:tadfisher/android-nixpkgs/canary";

      # If you have nixpkgs as an input, this will replace the "nixpkgs" input
      # for the "android" flake.
      #
      # inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { self, android-nixpkgs }: {
    packages.x86_64-linux.android-sdk = android-nixpkgs.sdk (sdkPkgs: with sdkPkgs; [
      build-tools-31-0-0
      cmdline-tools-latest
      emulator
      platform-tools
      platforms-android-31
    ]);
  };
}
