#!/bin/bash

#pnpm start &

#METRO_BUNDLER_PID=$!

detox test --configuration android.emu.release --headless

#DETOX_EXIT_CODE=$?

#kill $METRO_BUNDLER_PID

#exit $DETOX_EXIT_CODE


