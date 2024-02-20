{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "Startpage";
  buildInputs = with pkgs; [
    nodejs
    # web-ext
  ];
}
