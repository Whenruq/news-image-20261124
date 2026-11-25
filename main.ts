// Entry for make.fun's news-image-20261124 bounty (Node 22, standard library only).
// The entry image is the entry.png beside this file: a 1024x1024 front page summing up
// Tuesday 24 November 2026 (tankers ablaze in the Strait of Hormuz, Virginia and
// Oregon suing SpaceX over Grok deepfakes, the Hamas security chief killed in Gaza,
// the Zaporizhzhia strike, the US blacklisting of Megaspeed over AI chips, and the
// Cikande factory fire toll reaching twenty-six). The program copies it to
// /output/entry.png; the gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by
// 1024 pixels, and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Deterministic by construction: the same committed bytes are copied on every run,
// so two runs write identical output, as the bounty requires.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Create the output directory first: the grader's /output may not exist yet,
// and a missing directory would make the copy fail for no good reason.
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
