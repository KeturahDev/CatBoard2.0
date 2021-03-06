﻿// <auto-generated />
using System;
using CatBoardApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CatBoardApi.Migrations
{
    [DbContext(typeof(CatBoardApiContext))]
    [Migration("20200330170907_SeedData")]
    partial class SeedData
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("CatBoardApi.Models.Board", b =>
                {
                    b.Property<int>("BoardId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.HasKey("BoardId");

                    b.ToTable("Boards");

                    b.HasData(
                        new
                        {
                            BoardId = 1,
                            Description = "Cats standing on their hind legs",
                            Name = "Cat's Standing Up"
                        },
                        new
                        {
                            BoardId = 2,
                            Description = "Cats",
                            Name = "Cat's Being Cute"
                        },
                        new
                        {
                            BoardId = 3,
                            Description = "Fighting cats",
                            Name = "Cat Fight"
                        },
                        new
                        {
                            BoardId = 4,
                            Description = "Cats living like tomorrow doesn't matter.",
                            Name = "Cats be cattin"
                        });
                });

            modelBuilder.Entity("CatBoardApi.Models.Comment", b =>
                {
                    b.Property<int>("CommentId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AuthorId");

                    b.Property<string>("Body");

                    b.Property<DateTime>("DateCreated");

                    b.Property<DateTime>("EditDate");

                    b.Property<int>("PostId");

                    b.Property<int>("Score");

                    b.HasKey("CommentId");

                    b.HasIndex("PostId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("CatBoardApi.Models.Post", b =>
                {
                    b.Property<int>("PostId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AuthorId");

                    b.Property<int>("BoardId");

                    b.Property<string>("Body");

                    b.Property<DateTime>("DateCreated");

                    b.Property<DateTime>("EditDate");

                    b.Property<int>("Score");

                    b.Property<string>("Title");

                    b.HasKey("PostId");

                    b.HasIndex("BoardId");

                    b.ToTable("Posts");
                });

            modelBuilder.Entity("CatBoardApi.Models.User", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp");

                    b.Property<string>("Email");

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail");

                    b.Property<string>("NormalizedUserName");

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("CatBoardApi.Models.Comment", b =>
                {
                    b.HasOne("CatBoardApi.Models.Post")
                        .WithMany("Comments")
                        .HasForeignKey("PostId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("CatBoardApi.Models.Post", b =>
                {
                    b.HasOne("CatBoardApi.Models.Board")
                        .WithMany("Posts")
                        .HasForeignKey("BoardId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
