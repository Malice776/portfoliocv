import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Meta,
  Schema,
  AvatarGroup,
  Column,
  Heading,
  Media,
  Text,
  SmartLink,
  Row,
  Line,
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import { Projects } from "@/components/work/Projects";
import type { Metadata } from "next";

// --------------------
// Static params for dynamic routes
// --------------------
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts
    .filter((post) => post.slug)
    .map((post) => ({
      slug: post.slug,
    }));
}

// --------------------
// Generate metadata for SEO / OG
// --------------------
export async function generateMetadata({
  params,
}: {
  params: any; // <- utiliser 'any' pour éviter TypeScript PageProps error
}): Promise<Metadata> {
  const slugPath = Array.isArray(params.slug)
    ? params.slug.join("/")
    : params.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  const post = posts.find((p) => p.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL,
    image:
      post.metadata.image ||
      `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`,
    path: `${work.path}/${post.slug}`,
  });
}

// --------------------
// Main component
// --------------------
export default async function Project({ params }: any) {
  const slugPath = Array.isArray(params.slug)
    ? params.slug.join("/")
    : params.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  const post = posts.find((p) => p.slug === slugPath);

  if (!post) notFound();

  // sécuriser les images et team
  const safeMetadata = {
    ...post.metadata,
    images: Array.isArray(post.metadata.images) ? post.metadata.images : [],
    team: Array.isArray(post.metadata.team) ? post.metadata.team : [],
  };

  const avatars = safeMetadata.team.map((member) => ({
    src: member.avatar || "",
  }));

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={safeMetadata.title}
        description={safeMetadata.summary}
        datePublished={safeMetadata.publishedAt}
        dateModified={safeMetadata.publishedAt}
        image={
          safeMetadata.image ||
          `/api/og/generate?title=${encodeURIComponent(safeMetadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <SmartLink href="/work">
          <Text variant="label-strong-m">Projects</Text>
        </SmartLink>
        {safeMetadata.publishedAt && (
          <Text variant="body-default-xs" onBackground="neutral-weak" marginBottom="12">
            {formatDate(safeMetadata.publishedAt)}
          </Text>
        )}
        <Heading variant="display-strong-m">{safeMetadata.title}</Heading>
      </Column>

      <Row marginBottom="32" horizontal="center">
        <Row gap="16" vertical="center">
          {avatars.length > 0 && <AvatarGroup reverse avatars={avatars} size="s" />}
          <Text variant="label-default-m" onBackground="brand-weak">
            {safeMetadata.team.map((member, idx) => (
              <span key={idx}>
                {idx > 0 && (
                  <Text as="span" onBackground="neutral-weak">
                    ,{" "}
                  </Text>
                )}
                <SmartLink href={member.linkedIn}>{member.name}</SmartLink>
              </span>
            ))}
          </Text>
        </Row>
      </Row>

      {safeMetadata.images.length > 0 && (
        <Media
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt={safeMetadata.title}
          src={safeMetadata.images[0]}
        />
      )}

      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <CustomMDX source={post.content} />
      </Column>

      <Column fillWidth gap="40" horizontal="center" marginTop="40">
        <Line maxWidth="40" />
        <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
          Related projects
        </Heading>
        <Projects exclude={[post.slug]} range={[2]} />
      </Column>

      <ScrollToHash />
    </Column>
  );
}
