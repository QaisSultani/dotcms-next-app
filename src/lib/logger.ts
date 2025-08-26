const logger = (
  message: string,
  data?: unknown,
  type: "info" | "warn" = "info"
) => {
  if (type === "info") {
    if (data !== undefined && data !== null) {
      console.info(`[withLogger] ${message}:`, data);
    } else {
      console.info(`[withLogger] ${message}`);
    }
  } else {
    if (data !== undefined && data !== null) {
      console.warn(`[withLogger] ${message}:`, data);
    } else {
      console.warn(`[withLogger] ${message}`);
    }
  }
};

export async function withLogger<T>(
  eventName: string,
  callback: () => Promise<T>
): Promise<T | null> {
  try {
    logger(`processing ${eventName}...`);

    const data = await callback();

    if (data === null || data === undefined) {
      throw new Error(eventName);
    }

    logger(`processed ${eventName}`, data);

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger("error processing", error.message, "warn");
    } else {
      logger(`unexpected error processing ${eventName}`, error, "warn");
    }
    return null;
  }
}
