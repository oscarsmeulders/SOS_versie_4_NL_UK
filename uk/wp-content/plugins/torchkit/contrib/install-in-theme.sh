#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Usage: ./install-in-theme.sh <theme-folder>"
    exit
fi

CONTRIB_FOLDER="$(dirname $0)"
PAGE_TEMPLATE_FOLDER="$CONTRIB_FOLDER/../../../themes/$1/page-templates"

if [ ! -d "$PAGE_TEMPLATE_FOLDER" ]; then
    mkdir "$PAGE_TEMPLATE_FOLDER"
fi

cp -v "$CONTRIB_FOLDER/slideshow.php" "$PAGE_TEMPLATE_FOLDER/"

