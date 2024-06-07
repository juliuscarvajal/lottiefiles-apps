'use server';

export async function getAnimations(e: FormData) {
  try {
    console.log(`>>> form`, e);
    const res = await fetch(
      'https://lottiefiles.com/api/search/get-animations?query=loading+dots&type=all&aep=false&sort=popular&page=1'
    );
    const data = await res.json();
    console.log(`>>> data`, data?.data);
  } catch (err) {
    console.error(`>>>`, err);
  }
}
