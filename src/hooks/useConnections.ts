"use client";

import { useState, useCallback } from "react";
import { TILES, GROUPS } from "@/data/connections";
import type { GroupId } from "@/data/connections";

export type ConnectionsPhase = "playing" | "won" | "lost";

interface ConnectionsState {
  selected: number[];       // currently selected tile IDs (max 4)
  shakingTiles: number[];   // tile IDs showing wrong-guess shake animation
  pendingReveal: GroupId | null; // group currently bouncing (not yet in revealed)
  revealed: GroupId[];      // fully revealed groups (banners shown, tiles gone)
  mistakes: number;
  phase: ConnectionsPhase;
}

export function useConnections() {
  const [state, setState] = useState<ConnectionsState>({
    selected: [],
    shakingTiles: [],
    pendingReveal: null,
    revealed: [],
    mistakes: 0,
    phase: "playing",
  });

  const selectTile = useCallback((id: number) => {
    setState((prev) => {
      // Block selection while an animation is in progress
      if (prev.phase !== "playing" || prev.pendingReveal !== null || prev.shakingTiles.length > 0) return prev;
      const isSelected = prev.selected.includes(id);
      if (isSelected) {
        return { ...prev, selected: prev.selected.filter((s) => s !== id) };
      }
      if (prev.selected.length >= 4) return prev;
      return { ...prev, selected: [...prev.selected, id] };
    });
  }, []);

  const submitGuess = useCallback(() => {
    setState((prev) => {
      if (prev.selected.length !== 4 || prev.phase !== "playing" || prev.pendingReveal !== null) return prev;

      const selectedTiles = TILES.filter((t) => prev.selected.includes(t.id));
      const groupIds = selectedTiles.map((t) => t.groupId);
      const allSame = groupIds.every((g) => g === groupIds[0]);

      if (allSame) {
        const groupId = groupIds[0] as GroupId;
        // Start bounce — tiles stay in grid, pendingReveal is set
        return {
          ...prev,
          selected: [],
          shakingTiles: [],
          pendingReveal: groupId,
        };
      } else {
        const newMistakes = prev.mistakes + 1;
        const newPhase: ConnectionsPhase = newMistakes >= 4 ? "lost" : "playing";
        return {
          ...prev,
          shakingTiles: prev.selected,
          mistakes: newMistakes,
          phase: newPhase,
        };
      }
    });

    // After bounce animation completes: move pendingReveal into revealed
    setTimeout(() => {
      setState((prev) => {
        if (prev.pendingReveal === null) return prev;
        const groupId = prev.pendingReveal;
        const newRevealed = [...prev.revealed, groupId];
        const newPhase: ConnectionsPhase = newRevealed.length === 4 ? "won" : "playing";
        return {
          ...prev,
          pendingReveal: null,
          revealed: newRevealed,
          phase: newPhase,
        };
      });
    }, 700);

    // After shake animation completes: clear the shaking tiles and selection
    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        shakingTiles: [],
        selected: prev.shakingTiles.length > 0 ? [] : prev.selected,
      }));
    }, 600);
  }, []);

  const showAll = useCallback(() => {
    setState({
      selected: [],
      shakingTiles: [],
      pendingReveal: null,
      revealed: [0, 1, 2, 3],
      mistakes: 0,
      phase: "won",
    });
  }, []);

  const reset = useCallback(() => {
    setState({
      selected: [],
      shakingTiles: [],
      pendingReveal: null,
      revealed: [],
      mistakes: 0,
      phase: "playing",
    });
  }, []);

  return { state, selectTile, submitGuess, showAll, reset, GROUPS, TILES };
}
