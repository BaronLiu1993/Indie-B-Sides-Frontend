export const Follow = async (userId1, userId2) => {
    try {
        const response = await fetch(
            `https://network-spotify-backend.onrender.com/profile/follow`,
            {
              method: "POST",
              headers: {
                //Authorization: `Bearer ${accessToken}`
                "content-type": "application/json",
              },
              body: JSON.stringify({ userId1, userId2 }),
            }
          );
        if (response.ok) {
            return { success: true}
        }
    } catch {
        return { success: false}
    }
  };
  