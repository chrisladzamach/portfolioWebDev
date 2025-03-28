export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export async function fetchProjects(username: string): Promise<Project[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await response.json();

    return data.map((repo: any) => ({
      title: repo.name,
      description: repo.description || "No description available.",
      image: `https://picsum.photos/800/600?random=${repo.id}`, // Imagen aleatoria
      technologies: repo.language ? [repo.language] : ["Unknown"],
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
